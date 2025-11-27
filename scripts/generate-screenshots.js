#!/usr/bin/env node

/**
 * 原生家庭健康度测试截图生成脚本
 * 
 * 功能：
 * 1. 启动开发服务器
 * 2. 生成20个随机分数的测试报告截图
 * 3. 保存到screenshots文件夹
 * 
 * 使用方法：
 * npm run screenshot
 * 
 * 安全限制：
 * - 只能在localhost环境运行
 * - 生产环境无法使用测试模式
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 生成随机的6个维度分数（0-100）
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

// 计算总分
function calculateTotalScore(scores) {
  const sum = Object.values(scores).reduce((a, b) => a + b, 0);
  return Math.round(sum / 6);
}

// 获取等级描述
function getLevelDescription(totalScore) {
  if (totalScore >= 90) return '非常健康';
  if (totalScore >= 75) return '健康';
  if (totalScore >= 60) return '基本健康';
  if (totalScore >= 45) return '存在问题';
  if (totalScore >= 30) return '问题较多';
  return '严重问题';
}

// 生成20组随机测试数据
function generateTestData(count = 20) {
  const testData = [];
  for (let i = 0; i < count; i++) {
    const scores = generateRandomScores();
    const totalScore = calculateTotalScore(scores);
    testData.push({
      index: i + 1,
      scores,
      totalScore,
      level: getLevelDescription(totalScore)
    });
  }
  return testData;
}

// 创建screenshots文件夹
const screenshotsDir = path.join(path.dirname(__dirname), 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function generateScreenshots() {
  console.log('🚀 启动截图生成器...\n');
  console.log('📊 将生成20张随机分数的测试报告截图\n');
  
  const browser = await puppeteer.launch({
    headless: 'false',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ],
    protocolTimeout: 60000
  });

  // 生成20组测试数据
  const testData = generateTestData(20);
  
  // 统计分数分布
  const scoreRanges = {
    '90-100': 0,
    '75-89': 0,
    '60-74': 0,
    '45-59': 0,
    '30-44': 0,
    '0-29': 0
  };
  
  testData.forEach(({ totalScore }) => {
    if (totalScore >= 90) scoreRanges['90-100']++;
    else if (totalScore >= 75) scoreRanges['75-89']++;
    else if (totalScore >= 60) scoreRanges['60-74']++;
    else if (totalScore >= 45) scoreRanges['45-59']++;
    else if (totalScore >= 30) scoreRanges['30-44']++;
    else scoreRanges['0-29']++;
  });
  
  console.log('📋 随机生成的分数分布:');
  Object.entries(scoreRanges).forEach(([range, count]) => {
    console.log(`   ${range}分: ${count}张`);
  });
  console.log('');

  try {
    for (const data of testData) {
      console.log(`📸 [${data.index}/20] 正在生成总分${data.totalScore}分的截图...`);
      
      let page;
      try {
        page = await browser.newPage();
        
        // 设置视口大小
        await page.setViewport({
          width: 1200,
          height: 2400,
          deviceScaleFactor: 2 // 高清截图
        });

        // 构建URL参数
        const params = new URLSearchParams({
          test: 'true',
          emotional: data.scores.emotional,
          communication: data.scores.communication,
          boundary: data.scores.boundary,
          conflict: data.scores.conflict,
          security: data.scores.security,
          growth: data.scores.growth
        });
        
        const url = `http://localhost:5173/?${params.toString()}`;
        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 30000
        });

        // 等待页面完全加载
        await page.waitForSelector('.family-result-screen', { timeout: 10000 });
        
        // 额外等待动画完成
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 截图 - 使用序号和总分命名
        const timestamp = Date.now();
        const screenshotPath = path.join(
          screenshotsDir, 
          `${String(data.index).padStart(2, '0')}_score${data.totalScore}_${timestamp}.png`
        );
        await page.screenshot({
          path: screenshotPath,
          fullPage: true
        });

        console.log(`✅ [${data.index}/20] 总分${data.totalScore}分 (${data.level}) 截图已保存`);
        
      } catch (error) {
        console.error(`❌ [${data.index}/20] 截图失败:`, error.message);
      } finally {
        if (page) {
          await page.close().catch(() => {});
        }
      }
      
      // 短暂延迟，避免过快
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n🎉 所有截图生成完成！');
    console.log(`📁 截图保存位置: ${screenshotsDir}`);
    console.log('\n📊 最终统计:');
    Object.entries(scoreRanges).forEach(([range, count]) => {
      console.log(`   ${range}分: ${count}张`);
    });
    
  } catch (error) {
    console.error('❌ 生成截图时出错:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// 检查开发服务器是否运行
async function checkServer() {
  try {
    const response = await fetch('http://localhost:5173');
    return response.ok;
  } catch {
    return false;
  }
}

// 主函数
async function main() {
  console.log('🔍 检查开发服务器...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.error('❌ 开发服务器未运行！');
    console.log('💡 请先运行: npm run dev');
    console.log('💡 然后在另一个终端运行: npm run screenshot');
    process.exit(1);
  }

  console.log('✅ 开发服务器正在运行\n');
  
  await generateScreenshots();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
