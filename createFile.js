const fs = require('fs');
const path = require('path');

/**
 * 批量创建文件
 * @param {string[]} fileNames - 文件名数组
 * @param {string} directory - 文件要创建的目录（可选，默认为当前目录）
 */
function createFiles(fileNames, directory = '.') {
    fileNames.forEach(fileName => {
        const filePath = path.join(directory, fileName);
        
        // 创建写入流，写入空内容（可选）
        const fileStream = fs.createWriteStream(filePath);
        fileStream.on('finish', () => {
            console.log(`File ${filePath} created successfully.`);
            fileStream.close();
        });
        fileStream.end();
    });
}

// 示例用法
const fileNames = [
  "模拟数据序列化传输.js",
  "文本统计分析.js",
  "文件缓存系统.js",
  "项目排期.js",
  "信道分配.js",
  "学生重新排队.js",
  "寻找最优的路测线路.js",
  "音乐小说内容重复识别.js",
  "园区参观路径.js",
  "员工派遣.js",
  "运输时间.js",
  "找城市.js",
  "找数字.js",
  "智能驾驶.js",
  "中文分词模拟器.js",
  "字符串拼接.js",
  "最小矩阵宽度.js",
  "最长的指定瑕疵度的元音子串.js",
  "最长子字符串的长度（二）.js",
];
const directory = './src/200'; // 你可以指定一个目录，例如 './files'

// 确保目录存在，如果不存在则创建它
if (!fs.existsSync(directory)){
    fs.mkdirSync(directory, { recursive: true });
}

createFiles(fileNames, directory);

