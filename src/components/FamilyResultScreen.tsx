import React from 'react';
import { TestResult, Answers } from '../types';
import { dimensions } from '../data/dimensions';
import './FamilyResultScreen.css';

interface FamilyResultScreenProps {
  result: TestResult;
  answers: Answers;
}

export const FamilyResultScreen: React.FC<FamilyResultScreenProps> = ({ result, answers }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'excellent': return '#4CAF50';
      case 'good': return '#8BC34A';
      case 'fair': return '#FFC107';
      case 'concerning': return '#FF9800';
      case 'problematic': return '#FF5722';
      case 'severe': return '#F44336';
      default: return '#9E9E9E';
    }
  };





  return (
    <div className="family-result-screen">
      <h1>测试结果</h1>
      
      {/* 六芒星雷达图 + 总分 */}
      <div className="radar-chart-section">
        <div className="radar-with-score">
          <svg width="400" height="400" viewBox="0 0 400 400">
            {/* 背景网格 */}
            {(() => {
              const center = 200;
              const maxRadius = 160;
              const levels = [20, 40, 60, 80, 100];
              const dimensionCount = 6;
              
              return (
                <>
                  {/* 同心圆 */}
                  {levels.map((level) => {
                    const radius = (level / 100) * maxRadius;
                    return (
                      <circle
                        key={`circle-${level}`}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke="#BBDEFB"
                        strokeWidth="2"
                      />
                    );
                  })}
                  
                  {/* 放射线 */}
                  {Array.from({ length: dimensionCount }).map((_, index) => {
                    const angle = (Math.PI * 2 * index) / dimensionCount - Math.PI / 2;
                    const x = center + maxRadius * Math.cos(angle);
                    const y = center + maxRadius * Math.sin(angle);
                    return (
                      <line
                        key={`line-${index}`}
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="#BBDEFB"
                        strokeWidth="2"
                      />
                    );
                  })}
                </>
              );
            })()}
            
            {/* 数据区域 */}
            <path
              d={(() => {
                const center = 200;
                const maxRadius = 160;
                const dimensionKeys = ['emotional', 'communication', 'boundary', 'conflict', 'security', 'growth'] as const;
                
                const points = dimensionKeys.map((dim, index) => {
                  const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
                  const score = answers[dim];
                  const radius = (score / 100) * maxRadius;
                  const x = center + radius * Math.cos(angle);
                  const y = center + radius * Math.sin(angle);
                  return `${x},${y}`;
                });

                return `M ${points.join(' L ')} Z`;
              })()}
              fill={`${getLevelColor(result.level)}30`}
              stroke={getLevelColor(result.level)}
              strokeWidth="3"
            />
            
            {/* 维度标签 */}
            {(() => {
              const center = 200;
              const labelRadius = 185;
              const dimensionKeys = ['emotional', 'communication', 'boundary', 'conflict', 'security', 'growth'] as const;
              
              return dimensionKeys.map((dim, index) => {
                const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2;
                const x = center + labelRadius * Math.cos(angle);
                const y = center + labelRadius * Math.sin(angle);
                
                return (
                  <text
                    key={dim}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    fontWeight="600"
                    fill="#37474F"
                  >
                    {dimensions[dim].name}
                  </text>
                );
              });
            })()}
            
            {/* 中心分数 */}
            <text
              x="200"
              y="195"
              textAnchor="middle"
              fontSize="56"
              fontWeight="bold"
              fill={getLevelColor(result.level)}
            >
              {result.totalScore}
            </text>
            
            {/* 中心标签 */}
            <text
              x="200"
              y="225"
              textAnchor="middle"
              fontSize="14"
              fill="#78909C"
              fontWeight="500"
            >
              健康度
            </text>
          </svg>
        </div>
        
        <div className="score-description-bubble" style={{ 
          backgroundColor: `${getLevelColor(result.level)}15`,
          borderColor: getLevelColor(result.level),
          color: getLevelColor(result.level)
        }}>
          {result.levelDescription}
        </div>
      </div>

      {/* 维度详情 */}
      <div className="dimensions-detail">
        <h2>维度分析</h2>
        {(Object.keys(dimensions) as Array<keyof typeof dimensions>).map((dim) => {
          const score = answers[dim];
          const info = dimensions[dim];
          const percentage = score;
          
          return (
            <div key={dim} className="dimension-card">
              <div className="dimension-header">
                <h3>{info.name}</h3>
                <span className="dimension-score">{score}分</span>
              </div>
              <div className="dimension-progress">
                <div 
                  className="dimension-progress-fill" 
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: percentage >= 75 ? '#4CAF50' : percentage >= 60 ? '#FFC107' : '#FF5722'
                  }}
                />
              </div>
              <p className="dimension-description">{info.description}</p>
              
              {score >= 75 ? (
                <div className="dimension-traits healthy">
                  <strong>✅ 健康特征：</strong>
                  <ul>
                    {info.healthyTraits.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <div className="dimension-traits unhealthy">
                    <strong>⚠️ 可能存在的问题：</strong>
                    <ul>
                      {info.unhealthyTraits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="dimension-suggestions">
                    <strong>💡 改善建议：</strong>
                    <ul>
                      {info.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 总结和建议 */}
      <div className="final-message">
        <h2>写在最后</h2>
        <p>
          原生家庭对我们的影响是深远的，但它不能决定我们的一生。
          认识和理解这些影响是成长的第一步。
        </p>
        <p>
          无论测试结果如何，请记住：你值得被爱，值得拥有健康的关系。
          如果你感到困扰，寻求专业心理咨询是勇敢和明智的选择。
        </p>
        <div className="support-resources">
          <h3>💚 寻求帮助</h3>
          <p>如果你需要专业支持，可以考虑：</p>
          <ul>
            <li>心理咨询师或治疗师</li>
            <li>家庭治疗</li>
            <li>支持小组</li>
            <li>心理健康热线</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
