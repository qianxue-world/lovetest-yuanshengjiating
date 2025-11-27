import { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { FamilyResultScreen } from './components/FamilyResultScreen';
import { ActivationError } from './components/ActivationError';
import { ActivationService } from './services/activationService';
import { Answers, Dimension, TestResult } from './types';
import './App.css';

type Screen = 'start' | 'question' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    emotional: 0,
    communication: 0,
    boundary: 0,
    conflict: 0,
    security: 0,
    growth: 0
  });
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  
  // 激活码验证状态
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [activationError, setActivationError] = useState<string | null>(null);
  const [activationCode, setActivationCode] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState<boolean>(true);

  const totalQuestions = 60;

  // 检查激活码或测试模式
  useEffect(() => {
    checkTestModeOrValidate();
  }, []);

  const checkTestModeOrValidate = async () => {
    // 检查是否为测试模式（仅localhost）
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get('test') === 'true';
    
    // 安全检查：只在localhost环境下允许测试模式
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '';

    if (isTestMode && isLocalhost) {
      // 测试模式：从URL参数读取分数（已经是0-100的分数）
      const dimensionScores: Answers = {
        emotional: Math.min(100, Math.max(0, parseInt(urlParams.get('emotional') || '0'))),
        communication: Math.min(100, Math.max(0, parseInt(urlParams.get('communication') || '0'))),
        boundary: Math.min(100, Math.max(0, parseInt(urlParams.get('boundary') || '0'))),
        conflict: Math.min(100, Math.max(0, parseInt(urlParams.get('conflict') || '0'))),
        security: Math.min(100, Math.max(0, parseInt(urlParams.get('security') || '0'))),
        growth: Math.min(100, Math.max(0, parseInt(urlParams.get('growth') || '0')))
      };

      console.log('🧪 测试模式激活:', dimensionScores);
      
      // 计算总分
      const totalScore = Math.round(
        (dimensionScores.emotional + 
         dimensionScores.communication + 
         dimensionScores.boundary + 
         dimensionScores.conflict + 
         dimensionScores.security + 
         dimensionScores.growth) / 6
      );

      // 确定等级
      let level: TestResult['level'];
      let levelDescription: string;

      if (totalScore >= 90) {
        level = 'excellent';
        levelDescription = '非常健康的原生家庭';
      } else if (totalScore >= 75) {
        level = 'good';
        levelDescription = '健康的原生家庭';
      } else if (totalScore >= 60) {
        level = 'fair';
        levelDescription = '基本健康，有改善空间';
      } else if (totalScore >= 45) {
        level = 'concerning';
        levelDescription = '存在一些问题，需要关注';
      } else if (totalScore >= 30) {
        level = 'problematic';
        levelDescription = '问题较多，建议寻求帮助';
      } else {
        level = 'severe';
        levelDescription = '严重问题，强烈建议专业咨询';
      }

      const result: TestResult = {
        totalScore,
        dimensionScores,
        level,
        levelDescription
      };

      setTestResult(result);
      setScreen('result');
      setIsActivated(true);
      setIsValidating(false);
      return;
    }

    // 正常模式：验证激活码
    validateActivation();
  };

  const validateActivation = async () => {
    setIsValidating(true);

    // 0. 开发环境检测 - 跳过激活码验证
    if (ActivationService.isDevelopmentMode()) {
      console.log('🔧 Development mode detected - skipping activation');
      setIsActivated(true);
      setActivationCode('DEV-MODE');
      setIsValidating(false);
      return;
    }

    // 1. 先检查本地存储的激活码
    const savedActivation = ActivationService.getSavedActivationCode();
    if (savedActivation) {
      console.log('Using saved activation code:', savedActivation.code);
      setIsActivated(true);
      setActivationCode(savedActivation.code);
      setIsValidating(false);
      return;
    }

    // 2. 从URL获取激活码
    const codeFromURL = ActivationService.getActivationCodeFromURL();
    if (!codeFromURL) {
      setActivationError('请使用有效的激活码访问此页面');
      setIsActivated(false);
      setIsValidating(false);
      return;
    }

    setActivationCode(codeFromURL);

    // 3. 向后端验证激活码
    try {
      const result = await ActivationService.validateActivationCode(codeFromURL);
      
      if (result.isValid && result.expiresAt) {
        // 验证成功，保存到本地存储
        ActivationService.saveActivationCode(codeFromURL, result.expiresAt);
        setIsActivated(true);
        setActivationError(null);
      } else {
        // 验证失败
        setIsActivated(false);
        setActivationError(result.message);
      }
    } catch (error) {
      console.error('Activation validation failed:', error);
      setIsActivated(false);
      setActivationError('激活码验证失败，请稍后重试');
    }

    setIsValidating(false);
  };

  const handleStart = () => {
    setScreen('question');
  };

  const handleAnswer = (dimension: Dimension, score: number) => {
    const newAnswers = { ...answers, [dimension]: answers[dimension] + score };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 计算最终结果
      const result = calculateTestResult(newAnswers);
      setTestResult(result);
      setScreen('result');
    }
  };

  const calculateTestResult = (ans: Answers): TestResult => {
    // 每个维度最高分：10题 × 5分 = 50分
    // 转换为0-100分制
    const dimensionScores: Answers = {
      emotional: Math.round((ans.emotional / 50) * 100),
      communication: Math.round((ans.communication / 50) * 100),
      boundary: Math.round((ans.boundary / 50) * 100),
      conflict: Math.round((ans.conflict / 50) * 100),
      security: Math.round((ans.security / 50) * 100),
      growth: Math.round((ans.growth / 50) * 100)
    };

    // 计算总分（6个维度的平均分）
    const totalScore = Math.round(
      (dimensionScores.emotional + 
       dimensionScores.communication + 
       dimensionScores.boundary + 
       dimensionScores.conflict + 
       dimensionScores.security + 
       dimensionScores.growth) / 6
    );

    // 确定等级
    let level: TestResult['level'];
    let levelDescription: string;

    if (totalScore >= 90) {
      level = 'excellent';
      levelDescription = '非常健康的原生家庭';
    } else if (totalScore >= 75) {
      level = 'good';
      levelDescription = '健康的原生家庭';
    } else if (totalScore >= 60) {
      level = 'fair';
      levelDescription = '基本健康，有改善空间';
    } else if (totalScore >= 45) {
      level = 'concerning';
      levelDescription = '存在一些问题，需要关注';
    } else if (totalScore >= 30) {
      level = 'problematic';
      levelDescription = '问题较多，建议寻求帮助';
    } else {
      level = 'severe';
      levelDescription = '严重问题，强烈建议专业咨询';
    }

    return {
      totalScore,
      dimensionScores,
      level,
      levelDescription
    };
  };

  // Dynamic color themes for each question - Sky Blue spectrum
  const colorThemes = [
    'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 50%, #42A5F5 100%)', // Light Blue → Sky Blue → Blue
    'linear-gradient(135deg, #B3E5FC 0%, #4FC3F7 50%, #29B6F6 100%)', // Cyan Light → Cyan → Cyan Dark
    'linear-gradient(135deg, #E1F5FE 0%, #81D4FA 50%, #4FC3F7 100%)', // Pale Blue → Light Cyan → Cyan
    'linear-gradient(135deg, #E3F2FD 0%, #64B5F6 50%, #2196F3 100%)', // Light Blue → Blue → Blue Dark
    'linear-gradient(135deg, #BBDEFB 0%, #42A5F5 50%, #1E88E5 100%)', // Sky Blue → Blue → Deep Blue
    'linear-gradient(135deg, #E1F5FE 0%, #4FC3F7 50%, #03A9F4 100%)', // Pale Blue → Cyan → Bright Blue
    'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 50%, #64B5F6 100%)', // Light Blue → Sky Blue → Medium Blue
    'linear-gradient(135deg, #B3E5FC 0%, #81D4FA 50%, #4FC3F7 100%)', // Cyan Light → Light Cyan → Cyan
  ];

  const getBackgroundStyle = () => {
    if (screen === 'question') {
      return { background: colorThemes[currentQuestion] };
    }
    return { background: colorThemes[0] };
  };

  // 显示加载状态
  if (isValidating) {
    return (
      <div className="app" style={{ background: colorThemes[0] }}>
        <div className="container" style={{ textAlign: 'center', padding: '100px 40px' }}>
          <div style={{ fontSize: '3em', marginBottom: '20px' }}>⏳</div>
          <h2 style={{ 
            background: 'linear-gradient(135deg, #FF6B9D 0%, #C8A2FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.5em',
            fontWeight: 'bold'
          }}>
            验证激活码中...
          </h2>
        </div>
      </div>
    );
  }

  // 显示激活错误
  if (!isActivated && activationError) {
    return <ActivationError message={activationError} code={activationCode || undefined} />;
  }

  // 激活成功，显示正常应用
  return (
    <div className="app" style={getBackgroundStyle()}>
      <div className="container">
        {screen === 'start' && <StartScreen onStart={handleStart} />}
        {screen === 'question' && (
          <QuestionScreen
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
          />
        )}
        {screen === 'result' && testResult && (
          <FamilyResultScreen
            result={testResult}
            answers={testResult.dimensionScores}
          />
        )}
        <div className="card-watermark">@潜学天下</div>
      </div>
    </div>
  );
}

export default App;
