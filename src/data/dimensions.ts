import { Dimension, DimensionInfo } from '../types';

export const dimensions: Record<Dimension, DimensionInfo> = {
  emotional: {
    name: '情感支持',
    description: '家庭成员之间的情感连接、理解和支持程度',
    healthyTraits: [
      '家人会倾听你的感受',
      '在困难时能得到情感支持',
      '可以自由表达情绪',
      '感受到被爱和被重视'
    ],
    unhealthyTraits: [
      '情感需求被忽视',
      '不敢表达真实感受',
      '缺乏情感回应',
      '感到孤独和不被理解'
    ],
    suggestions: [
      '学习识别和表达自己的情感需求',
      '建立健康的情感支持系统',
      '练习自我关怀和自我接纳',
      '考虑寻求心理咨询帮助'
    ]
  },
  communication: {
    name: '沟通质量',
    description: '家庭内部的沟通方式、频率和效果',
    healthyTraits: [
      '可以开放地交流想法',
      '家人会认真倾听',
      '沟通方式尊重平等',
      '能够有效解决误会'
    ],
    unhealthyTraits: [
      '缺乏有效沟通',
      '经常被打断或忽视',
      '沟通充满指责和批评',
      '重要事情无法讨论'
    ],
    suggestions: [
      '学习非暴力沟通技巧',
      '练习主动倾听',
      '建立定期沟通的习惯',
      '寻求家庭治疗改善沟通模式'
    ]
  },
  boundary: {
    name: '边界感',
    description: '个人空间、隐私和独立性的尊重程度',
    healthyTraits: [
      '个人隐私得到尊重',
      '有自己的独立空间',
      '可以做出自己的决定',
      '界限清晰且被尊重'
    ],
    unhealthyTraits: [
      '隐私经常被侵犯',
      '过度控制或干涉',
      '缺乏个人空间',
      '界限模糊或混乱'
    ],
    suggestions: [
      '学习设立和维护健康边界',
      '练习说"不"',
      '明确自己的需求和底线',
      '逐步建立独立性'
    ]
  },
  conflict: {
    name: '冲突处理',
    description: '家庭矛盾和分歧的处理方式',
    healthyTraits: [
      '冲突能够理性讨论',
      '寻求双赢的解决方案',
      '不会翻旧账或人身攻击',
      '冲突后能够和解'
    ],
    unhealthyTraits: [
      '冷暴力或激烈争吵',
      '问题长期得不到解决',
      '使用情感勒索',
      '冲突导致关系破裂'
    ],
    suggestions: [
      '学习健康的冲突解决技巧',
      '练习情绪管理',
      '寻找中立的调解者',
      '建立家庭冲突解决机制'
    ]
  },
  security: {
    name: '安全感',
    description: '在家庭中感受到的心理和情感安全程度',
    healthyTraits: [
      '感到被保护和支持',
      '可以做真实的自己',
      '不担心被抛弃或伤害',
      '有稳定的情感连接'
    ],
    unhealthyTraits: [
      '经常感到焦虑不安',
      '害怕被拒绝或批评',
      '缺乏安全感和归属感',
      '情感关系不稳定'
    ],
    suggestions: [
      '建立内在安全感',
      '寻找稳定的支持关系',
      '练习自我安抚技巧',
      '考虑创伤治疗'
    ]
  },
  growth: {
    name: '成长环境',
    description: '家庭对个人发展和自我实现的支持程度',
    healthyTraits: [
      '鼓励探索和尝试',
      '支持个人兴趣和梦想',
      '允许犯错和学习',
      '提供成长的资源和机会'
    ],
    unhealthyTraits: [
      '限制个人发展',
      '否定梦想和兴趣',
      '过度批评和打击',
      '缺乏成长支持'
    ],
    suggestions: [
      '重新定义自己的人生目标',
      '寻找支持性的成长环境',
      '培养自我效能感',
      '建立个人成长计划'
    ]
  }
};
