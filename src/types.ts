export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  dimension: Dimension;
  score: number; // 1-5分，代表该选项对该维度的贡献
}

// 原生家庭健康度的6个维度
export type Dimension = 
  | 'emotional'    // 情感支持
  | 'communication' // 沟通质量
  | 'boundary'     // 边界感
  | 'conflict'     // 冲突处理
  | 'security'     // 安全感
  | 'growth';      // 成长环境

export interface DimensionInfo {
  name: string;
  description: string;
  healthyTraits: string[];
  unhealthyTraits: string[];
  suggestions: string[];
}

export interface Answers {
  emotional: number;
  communication: number;
  boundary: number;
  conflict: number;
  security: number;
  growth: number;
}

export interface TestResult {
  totalScore: number; // 0-100
  dimensionScores: Answers; // 每个维度0-100
  level: 'excellent' | 'good' | 'fair' | 'concerning' | 'problematic' | 'severe';
  levelDescription: string;
}
