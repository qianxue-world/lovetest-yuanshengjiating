# 测试模式使用说明

## 概述

测试模式允许在本地开发环境中快速生成不同分数的测试报告截图，用于展示、调试和设计验证。

## 安全限制

⚠️ **重要安全特性**：
- 测试模式**仅在localhost环境**下可用
- 生产环境自动禁用测试模式
- 即使URL包含测试参数，非localhost环境也无法使用

## 使用方法

### 1. 启动开发服务器

```bash
npm run dev
```

### 2. 生成测试截图

在另一个终端窗口运行：

```bash
npm run screenshot
```

这将：
- 自动生成20组随机的测试数据
- 每组数据包含6个维度的随机分数（0-100）
- 为每组数据生成一张完整的测试报告截图
- 截图保存在 `screenshots/` 文件夹

### 3. 手动测试特定分数

你也可以在浏览器中手动访问特定分数的测试报告：

```
http://localhost:5173/?test=true&emotional=85&communication=90&boundary=75&conflict=80&security=88&growth=92
```

参数说明：
- `test=true` - 启用测试模式
- `emotional` - 情感支持分数 (0-100)
- `communication` - 沟通质量分数 (0-100)
- `boundary` - 边界感分数 (0-100)
- `conflict` - 冲突处理分数 (0-100)
- `security` - 安全感分数 (0-100)
- `growth` - 成长环境分数 (0-100)

## 截图文件命名

生成的截图文件命名格式：
```
01_score85_1234567890.png
02_score42_1234567891.png
...
```

- `01` - 序号（01-20）
- `score85` - 总分
- `1234567890` - 时间戳

## 分数等级

测试报告会根据总分显示不同的等级：

| 总分范围 | 等级描述 | 颜色 |
|---------|---------|------|
| 90-100 | 非常健康的原生家庭 | 绿色 |
| 75-89 | 健康的原生家庭 | 浅绿色 |
| 60-74 | 基本健康，有改善空间 | 黄色 |
| 45-59 | 存在一些问题，需要关注 | 橙色 |
| 30-44 | 问题较多，建议寻求帮助 | 深橙色 |
| 0-29 | 严重问题，强烈建议专业咨询 | 红色 |

## 技术实现

### 安全检查代码

```typescript
// 只在localhost环境下允许测试模式
const isLocalhost = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname === '';

if (isTestMode && isLocalhost) {
  // 允许测试模式
} else {
  // 正常验证流程
}
```

### 测试数据生成

```javascript
// 生成随机的6个维度分数
function generateRandomScores() {
  return {
    emotional: Math.floor(Math.random() * 101),
    communication: Math.floor(Math.random() * 101),
    boundary: Math.floor(Math.random() * 101),
    conflict: Math.floor(Math.random() * 101),
    security: Math.floor(Math.random() * 101),
    growth: Math.floor(Math.random() * 101)
  };
}
```

## 常见问题

### Q: 为什么在生产环境无法使用测试模式？

A: 这是安全设计。测试模式仅用于开发和调试，生产环境会自动禁用，即使URL包含测试参数也无法绕过。

### Q: 如何生成特定分数范围的截图？

A: 修改 `scripts/generate-screenshots.js` 中的 `generateRandomScores()` 函数，设置特定的分数范围。

### Q: 截图生成失败怎么办？

A: 确保：
1. 开发服务器正在运行 (`npm run dev`)
2. 端口5173没有被占用
3. 已安装puppeteer依赖

## 注意事项

1. ⚠️ 测试模式仅用于开发和展示，不要在生产环境使用
2. 📸 生成截图需要一定时间，请耐心等待
3. 🔒 测试模式有严格的localhost限制，无法绕过
4. 💾 截图文件较大，注意磁盘空间

## 示例

生成20张随机分数的测试报告：
```bash
# 终端1
npm run dev

# 终端2（等待服务器启动后）
npm run screenshot
```

查看特定分数的报告：
```
http://localhost:5173/?test=true&emotional=100&communication=100&boundary=100&conflict=100&security=100&growth=100
```
