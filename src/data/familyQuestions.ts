import { Question } from '../types';

// 原生家庭健康度测试问题 - 每个维度10题，共60题
export const familyQuestions: Question[] = [
  // ========== 情感支持维度 (10题) ==========
  {
    question: "当你感到难过或沮丧时，家人的反应是：",
    options: [
      { text: "会主动关心并倾听我的感受 💝", dimension: "emotional", score: 5 },
      { text: "偶尔会问问，但不太深入 😊", dimension: "emotional", score: 3 },
      { text: "觉得我小题大做，让我别想太多 😐", dimension: "emotional", score: 2 },
      { text: "忽视或批评我的情绪 😔", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "在家里，你觉得自己的感受：",
    options: [
      { text: "被重视和理解 ❤️", dimension: "emotional", score: 5 },
      { text: "有时被听见，有时被忽略 🤔", dimension: "emotional", score: 3 },
      { text: "经常被忽视 😶", dimension: "emotional", score: 2 },
      { text: "完全不重要 💔", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "当你取得成就时，家人会：",
    options: [
      { text: "真心为我高兴并庆祝 🎉", dimension: "emotional", score: 5 },
      { text: "简单表扬一下 👍", dimension: "emotional", score: 3 },
      { text: "觉得理所当然，没什么特别 😑", dimension: "emotional", score: 2 },
      { text: "泼冷水或挑毛病 😞", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "你是否感觉在家里可以做真实的自己？",
    options: [
      { text: "完全可以，很自在 😌", dimension: "emotional", score: 5 },
      { text: "大部分时候可以 🙂", dimension: "emotional", score: 3 },
      { text: "需要小心翼翼 😬", dimension: "emotional", score: 2 },
      { text: "必须伪装和隐藏 😰", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "家人对你的情感需求：",
    options: [
      { text: "敏感且及时回应 💕", dimension: "emotional", score: 5 },
      { text: "有时能注意到 💭", dimension: "emotional", score: 3 },
      { text: "很少注意到 😶‍🌫️", dimension: "emotional", score: 2 },
      { text: "从不关注 🚫", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "在家庭中，你感受到的爱是：",
    options: [
      { text: "无条件的接纳和爱 ❤️‍🔥", dimension: "emotional", score: 5 },
      { text: "有条件的，需要表现好 📊", dimension: "emotional", score: 3 },
      { text: "很少感受到爱 🥶", dimension: "emotional", score: 2 },
      { text: "感觉不被爱 💔", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "当你需要帮助时：",
    options: [
      { text: "家人会积极支持 🤝", dimension: "emotional", score: 5 },
      { text: "有时会帮忙 🆗", dimension: "emotional", score: 3 },
      { text: "需要反复请求 😓", dimension: "emotional", score: 2 },
      { text: "得不到支持 ❌", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "家人之间的情感连接：",
    options: [
      { text: "紧密且温暖 🫂", dimension: "emotional", score: 5 },
      { text: "一般，有些距离 🤷", dimension: "emotional", score: 3 },
      { text: "疏远冷漠 🧊", dimension: "emotional", score: 2 },
      { text: "几乎没有连接 ⛓️‍💥", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "你对家的感觉是：",
    options: [
      { text: "温暖的港湾 🏡", dimension: "emotional", score: 5 },
      { text: "还算舒适 🏠", dimension: "emotional", score: 3 },
      { text: "有些压抑 😮‍💨", dimension: "emotional", score: 2 },
      { text: "想要逃离 🏃", dimension: "emotional", score: 1 }
    ]
  },
  {
    question: "家人表达爱的方式：",
    options: [
      { text: "多样且让我感受到 💝", dimension: "emotional", score: 5 },
      { text: "有但不太明显 💌", dimension: "emotional", score: 3 },
      { text: "很少表达 📭", dimension: "emotional", score: 2 },
      { text: "从不表达 🚷", dimension: "emotional", score: 1 }
    ]
  },

  // ========== 沟通质量维度 (10题) ==========
  {
    question: "在家里，你的意见和想法：",
    options: [
      { text: "被认真倾听和考虑 👂", dimension: "communication", score: 5 },
      { text: "有时会被听取 🗣️", dimension: "communication", score: 3 },
      { text: "经常被打断或忽视 🙊", dimension: "communication", score: 2 },
      { text: "完全不被重视 🔇", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "家庭成员之间的对话：",
    options: [
      { text: "开放、尊重、平等 🤝", dimension: "communication", score: 5 },
      { text: "基本正常 💬", dimension: "communication", score: 3 },
      { text: "经常有争吵或冷战 ❄️", dimension: "communication", score: 2 },
      { text: "充满指责和攻击 ⚔️", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "当你想和家人谈论重要的事情时：",
    options: [
      { text: "可以找到合适的时机和方式 ✅", dimension: "communication", score: 5 },
      { text: "有时可以，有时不行 🤔", dimension: "communication", score: 3 },
      { text: "很难找到机会 😕", dimension: "communication", score: 2 },
      { text: "根本无法沟通 🚫", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "家人之间的沟通频率：",
    options: [
      { text: "经常且有质量的交流 💯", dimension: "communication", score: 5 },
      { text: "偶尔聊聊 📱", dimension: "communication", score: 3 },
      { text: "很少交流 📵", dimension: "communication", score: 2 },
      { text: "几乎不沟通 🔕", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "当出现误会时：",
    options: [
      { text: "能够坦诚沟通解决 🤗", dimension: "communication", score: 5 },
      { text: "有时能解决 🆗", dimension: "communication", score: 3 },
      { text: "经常无法解决 😞", dimension: "communication", score: 2 },
      { text: "误会越积越深 💥", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "家人的沟通方式：",
    options: [
      { text: "温和、理性、建设性 🌟", dimension: "communication", score: 5 },
      { text: "一般，有时会激动 😤", dimension: "communication", score: 3 },
      { text: "经常带有情绪和指责 😠", dimension: "communication", score: 2 },
      { text: "充满暴力语言 🤬", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "你是否能在家里表达不同意见？",
    options: [
      { text: "可以自由表达 🗨️", dimension: "communication", score: 5 },
      { text: "有时可以 💭", dimension: "communication", score: 3 },
      { text: "很难表达 😶", dimension: "communication", score: 2 },
      { text: "不敢表达 🤐", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "家庭会议或讨论：",
    options: [
      { text: "定期进行，效果好 📋", dimension: "communication", score: 5 },
      { text: "偶尔有 📝", dimension: "communication", score: 3 },
      { text: "很少或流于形式 📄", dimension: "communication", score: 2 },
      { text: "从不进行 ❌", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "家人是否会主动分享自己的想法和感受？",
    options: [
      { text: "经常分享 💬", dimension: "communication", score: 5 },
      { text: "偶尔分享 🗣️", dimension: "communication", score: 3 },
      { text: "很少分享 🤫", dimension: "communication", score: 2 },
      { text: "从不分享 🙊", dimension: "communication", score: 1 }
    ]
  },
  {
    question: "沟通后的感觉：",
    options: [
      { text: "被理解和支持 😊", dimension: "communication", score: 5 },
      { text: "还可以 😐", dimension: "communication", score: 3 },
      { text: "感觉更糟 😔", dimension: "communication", score: 2 },
      { text: "完全无效，很挫败 😞", dimension: "communication", score: 1 }
    ]
  },

  // ========== 边界感维度 (10题) ==========
  {
    question: "你的个人隐私：",
    options: [
      { text: "完全被尊重 🔒", dimension: "boundary", score: 5 },
      { text: "大部分时候被尊重 🚪", dimension: "boundary", score: 3 },
      { text: "经常被侵犯 👀", dimension: "boundary", score: 2 },
      { text: "没有隐私可言 🔓", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "家人对你的个人空间：",
    options: [
      { text: "充分尊重 🏠", dimension: "boundary", score: 5 },
      { text: "基本尊重 🚪", dimension: "boundary", score: 3 },
      { text: "经常打扰 🔔", dimension: "boundary", score: 2 },
      { text: "完全不尊重 🚨", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "关于你的人生决定（学业、工作、恋爱等）：",
    options: [
      { text: "支持我自己做决定 ✨", dimension: "boundary", score: 5 },
      { text: "会给建议但尊重我的选择 💡", dimension: "boundary", score: 3 },
      { text: "强烈干涉我的决定 ⚠️", dimension: "boundary", score: 2 },
      { text: "完全控制我的人生 ⛓️", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "你的个人物品：",
    options: [
      { text: "不会被随意翻动 🎁", dimension: "boundary", score: 5 },
      { text: "偶尔会被动 📦", dimension: "boundary", score: 3 },
      { text: "经常被翻看 📂", dimension: "boundary", score: 2 },
      { text: "没有私人物品的概念 📭", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "当你说\"不\"的时候：",
    options: [
      { text: "会被理解和接受 ✅", dimension: "boundary", score: 5 },
      { text: "有时被接受 🤷", dimension: "boundary", score: 3 },
      { text: "经常被忽视 😕", dimension: "boundary", score: 2 },
      { text: "不被允许拒绝 ❌", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "家人对你的社交关系：",
    options: [
      { text: "尊重我的交友选择 👥", dimension: "boundary", score: 5 },
      { text: "偶尔会过问 🤔", dimension: "boundary", score: 3 },
      { text: "过度干涉 👀", dimension: "boundary", score: 2 },
      { text: "严格控制 🚫", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "你的个人时间：",
    options: [
      { text: "可以自由支配 ⏰", dimension: "boundary", score: 5 },
      { text: "大部分可以 🕐", dimension: "boundary", score: 3 },
      { text: "经常被占用 ⏳", dimension: "boundary", score: 2 },
      { text: "完全没有 ⏱️", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "家人是否会未经允许查看你的手机、日记等？",
    options: [
      { text: "从不，完全尊重 🔐", dimension: "boundary", score: 5 },
      { text: "很少 🔑", dimension: "boundary", score: 3 },
      { text: "经常 👁️", dimension: "boundary", score: 2 },
      { text: "随时查看 📱", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "你的房间门：",
    options: [
      { text: "可以关上，会被敲门 🚪", dimension: "boundary", score: 5 },
      { text: "可以关但有时会直接进 🔔", dimension: "boundary", score: 3 },
      { text: "不允许关门 🚧", dimension: "boundary", score: 2 },
      { text: "没有自己的房间 🏚️", dimension: "boundary", score: 1 }
    ]
  },
  {
    question: "家人对你的期待：",
    options: [
      { text: "合理且尊重我的意愿 🎯", dimension: "boundary", score: 5 },
      { text: "有时过高但可以沟通 📊", dimension: "boundary", score: 3 },
      { text: "过高且不容商量 📈", dimension: "boundary", score: 2 },
      { text: "把我当成实现他们梦想的工具 🎭", dimension: "boundary", score: 1 }
    ]
  },

  // ========== 冲突处理维度 (10题) ==========
  {
    question: "家庭冲突的频率：",
    options: [
      { text: "很少，氛围和谐 ☮️", dimension: "conflict", score: 5 },
      { text: "偶尔有小摩擦 🤏", dimension: "conflict", score: 3 },
      { text: "经常争吵 😤", dimension: "conflict", score: 2 },
      { text: "持续不断的冲突 💥", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "当家庭出现矛盾时：",
    options: [
      { text: "会坐下来理性讨论 🪑", dimension: "conflict", score: 5 },
      { text: "有时能解决 🤝", dimension: "conflict", score: 3 },
      { text: "经常冷战或激烈争吵 ❄️🔥", dimension: "conflict", score: 2 },
      { text: "暴力或极端方式 ⚡", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "冲突中是否会有人身攻击或翻旧账？",
    options: [
      { text: "从不，就事论事 ✅", dimension: "conflict", score: 5 },
      { text: "偶尔会 😬", dimension: "conflict", score: 3 },
      { text: "经常会 😠", dimension: "conflict", score: 2 },
      { text: "总是这样 😡", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "冲突后的和解：",
    options: [
      { text: "能够真诚道歉和原谅 🤗", dimension: "conflict", score: 5 },
      { text: "表面和解 😐", dimension: "conflict", score: 3 },
      { text: "很难和解 😞", dimension: "conflict", score: 2 },
      { text: "从不和解，积怨越来越深 💔", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "家人是否会使用冷暴力（不理人、摔东西等）？",
    options: [
      { text: "从不 ✨", dimension: "conflict", score: 5 },
      { text: "很少 😌", dimension: "conflict", score: 3 },
      { text: "经常 😔", dimension: "conflict", score: 2 },
      { text: "总是这样 😰", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "冲突中你的感受：",
    options: [
      { text: "被尊重，可以表达 🗣️", dimension: "conflict", score: 5 },
      { text: "有时能表达 💬", dimension: "conflict", score: 3 },
      { text: "被压制 🤐", dimension: "conflict", score: 2 },
      { text: "感到恐惧和无助 😨", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "家人是否会用情感勒索（\"我都是为你好\"、\"你让我很失望\"）？",
    options: [
      { text: "从不 🚫", dimension: "conflict", score: 5 },
      { text: "偶尔 😕", dimension: "conflict", score: 3 },
      { text: "经常 😞", dimension: "conflict", score: 2 },
      { text: "总是这样 😣", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "冲突解决的方式：",
    options: [
      { text: "寻求双赢的解决方案 🤝", dimension: "conflict", score: 5 },
      { text: "妥协 🤷", dimension: "conflict", score: 3 },
      { text: "强势一方获胜 💪", dimension: "conflict", score: 2 },
      { text: "没有解决，问题累积 📚", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "家庭冲突对你的影响：",
    options: [
      { text: "很小，能够处理 😊", dimension: "conflict", score: 5 },
      { text: "有些影响但可以恢复 😐", dimension: "conflict", score: 3 },
      { text: "很大，经常感到痛苦 😢", dimension: "conflict", score: 2 },
      { text: "严重创伤 💔", dimension: "conflict", score: 1 }
    ]
  },
  {
    question: "家人是否会在冲突中威胁你（\"不听话就...\"）？",
    options: [
      { text: "从不 ✅", dimension: "conflict", score: 5 },
      { text: "很少 😌", dimension: "conflict", score: 3 },
      { text: "经常 😰", dimension: "conflict", score: 2 },
      { text: "总是威胁 😱", dimension: "conflict", score: 1 }
    ]
  },

  // ========== 安全感维度 (10题) ==========
  {
    question: "在家里，你感到：",
    options: [
      { text: "安全、放松、自在 😌", dimension: "security", score: 5 },
      { text: "基本安全 🙂", dimension: "security", score: 3 },
      { text: "经常紧张不安 😟", dimension: "security", score: 2 },
      { text: "恐惧和危险 😨", dimension: "security", score: 1 }
    ]
  },
  {
    question: "你是否担心家人会突然情绪爆发？",
    options: [
      { text: "不担心，情绪稳定 😊", dimension: "security", score: 5 },
      { text: "偶尔担心 😐", dimension: "security", score: 3 },
      { text: "经常担心 😰", dimension: "security", score: 2 },
      { text: "总是提心吊胆 😱", dimension: "security", score: 1 }
    ]
  },
  {
    question: "家庭关系的稳定性：",
    options: [
      { text: "稳定可靠 🏡", dimension: "security", score: 5 },
      { text: "基本稳定 🏠", dimension: "security", score: 3 },
      { text: "不稳定，经常变化 🌊", dimension: "security", score: 2 },
      { text: "混乱不堪 🌪️", dimension: "security", score: 1 }
    ]
  },
  {
    question: "你是否害怕被家人抛弃或拒绝？",
    options: [
      { text: "不害怕，感到被爱 💝", dimension: "security", score: 5 },
      { text: "偶尔会担心 🤔", dimension: "security", score: 3 },
      { text: "经常害怕 😔", dimension: "security", score: 2 },
      { text: "总是恐惧 😰", dimension: "security", score: 1 }
    ]
  },
  {
    question: "家庭环境的可预测性：",
    options: [
      { text: "规律可预测 📅", dimension: "security", score: 5 },
      { text: "基本可预测 📆", dimension: "security", score: 3 },
      { text: "经常变化无常 🎲", dimension: "security", score: 2 },
      { text: "完全混乱 🌀", dimension: "security", score: 1 }
    ]
  },
  {
    question: "你是否需要察言观色来避免冲突？",
    options: [
      { text: "不需要，氛围轻松 😄", dimension: "security", score: 5 },
      { text: "偶尔需要 😐", dimension: "security", score: 3 },
      { text: "经常需要 😬", dimension: "security", score: 2 },
      { text: "时刻警惕 😰", dimension: "security", score: 1 }
    ]
  },
  {
    question: "家人的承诺：",
    options: [
      { text: "可靠，说到做到 ✅", dimension: "security", score: 5 },
      { text: "基本可靠 🆗", dimension: "security", score: 3 },
      { text: "经常食言 😕", dimension: "security", score: 2 },
      { text: "从不兑现 ❌", dimension: "security", score: 1 }
    ]
  },
  {
    question: "你对家庭的归属感：",
    options: [
      { text: "强烈的归属感 🏡", dimension: "security", score: 5 },
      { text: "有一些归属感 🏠", dimension: "security", score: 3 },
      { text: "很弱 🏚️", dimension: "security", score: 2 },
      { text: "感觉像外人 👤", dimension: "security", score: 1 }
    ]
  },
  {
    question: "家庭是否有暴力行为（语言或肢体）？",
    options: [
      { text: "从未有过 ✨", dimension: "security", score: 5 },
      { text: "极少 😌", dimension: "security", score: 3 },
      { text: "偶尔有 😟", dimension: "security", score: 2 },
      { text: "经常发生 😱", dimension: "security", score: 1 }
    ]
  },
  {
    question: "你在家里的感觉：",
    options: [
      { text: "被保护和支持 🛡️", dimension: "security", score: 5 },
      { text: "基本安全 🙂", dimension: "security", score: 3 },
      { text: "需要保护自己 🚧", dimension: "security", score: 2 },
      { text: "感到威胁 ⚠️", dimension: "security", score: 1 }
    ]
  },

  // ========== 成长环境维度 (10题) ==========
  {
    question: "家人对你的兴趣爱好：",
    options: [
      { text: "支持和鼓励 🎨", dimension: "growth", score: 5 },
      { text: "不反对 🆗", dimension: "growth", score: 3 },
      { text: "不支持 😐", dimension: "growth", score: 2 },
      { text: "反对和阻止 🚫", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "你的梦想和目标：",
    options: [
      { text: "被理解和支持 ✨", dimension: "growth", score: 5 },
      { text: "被部分支持 💭", dimension: "growth", score: 3 },
      { text: "被忽视 😶", dimension: "growth", score: 2 },
      { text: "被否定和打击 💔", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "当你尝试新事物时：",
    options: [
      { text: "家人鼓励我探索 🚀", dimension: "growth", score: 5 },
      { text: "不反对 🤷", dimension: "growth", score: 3 },
      { text: "担心和阻止 ⚠️", dimension: "growth", score: 2 },
      { text: "严厉禁止 🛑", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "当你犯错时：",
    options: [
      { text: "被当作学习机会 📚", dimension: "growth", score: 5 },
      { text: "会被批评但不严重 😐", dimension: "growth", score: 3 },
      { text: "被严厉批评 😞", dimension: "growth", score: 2 },
      { text: "被羞辱和惩罚 😭", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "家人对你的评价：",
    options: [
      { text: "积极正面，看到优点 😊", dimension: "growth", score: 5 },
      { text: "中性 😐", dimension: "growth", score: 3 },
      { text: "经常批评 😔", dimension: "growth", score: 2 },
      { text: "总是否定和贬低 😞", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "家庭是否提供学习和成长的资源？",
    options: [
      { text: "积极提供 📚", dimension: "growth", score: 5 },
      { text: "基本满足 📖", dimension: "growth", score: 3 },
      { text: "很少提供 📄", dimension: "growth", score: 2 },
      { text: "从不提供或阻碍 🚫", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "你的自信心：",
    options: [
      { text: "在家庭中得到培养 💪", dimension: "growth", score: 5 },
      { text: "基本正常 🙂", dimension: "growth", score: 3 },
      { text: "被削弱 😕", dimension: "growth", score: 2 },
      { text: "被严重打击 😞", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "家人是否相信你的能力？",
    options: [
      { text: "充分信任 ✨", dimension: "growth", score: 5 },
      { text: "基本信任 🙂", dimension: "growth", score: 3 },
      { text: "经常质疑 🤔", dimension: "growth", score: 2 },
      { text: "从不相信 ❌", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "家庭氛围对你的影响：",
    options: [
      { text: "激励我成长 🌱", dimension: "growth", score: 5 },
      { text: "中性 😐", dimension: "growth", score: 3 },
      { text: "限制我的发展 ⛓️", dimension: "growth", score: 2 },
      { text: "严重阻碍我 🚧", dimension: "growth", score: 1 }
    ]
  },
  {
    question: "你觉得自己在家庭中：",
    options: [
      { text: "被看见、被认可 👀", dimension: "growth", score: 5 },
      { text: "存在感一般 😐", dimension: "growth", score: 3 },
      { text: "被忽视 😶", dimension: "growth", score: 2 },
      { text: "被否定存在价值 💔", dimension: "growth", score: 1 }
    ]
  }
];
