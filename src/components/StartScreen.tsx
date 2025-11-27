import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>原生家庭健康度测试</h1>
      
      <div className="intro-section">
        <h2>了解你的原生家庭</h2>
        <p className="intro-text">
          原生家庭是指你出生和成长的家庭。它深刻影响着我们的性格、情感模式和人际关系。
          通过这个测试，你可以更好地了解原生家庭对你的影响。
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">💝</div>
          <h3>6大维度</h3>
          <p>从情感支持、沟通质量、边界感、冲突处理、安全感、成长环境全面评估</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>可视化结果</h3>
          <p>六芒星雷达图直观展示各维度得分，清晰了解家庭健康状况</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>专业建议</h3>
          <p>针对每个维度提供具体的改善建议和成长方向</p>
        </div>
      </div>

      <div className="original-badge">
        <div className="badge-icon">⚠️</div>
        <div className="badge-content">
          <strong>温馨提示</strong>
          <p>本测试仅供参考，不能替代专业心理咨询。如有严重困扰，请寻求专业帮助。</p>
        </div>
      </div>

      <div className="btn" onClick={onStart}>
        <p>开始测试 (60题，约5分钟)</p>
      </div>
    </div>
  );
};
