const fs = require('fs')

// // 创建一个文件
// fs.writeFile('./test.txt', 'test123', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件创建成功');
//   }
// });

// // 同步创建一个文件
// fs.writeFileSync('./test1.txt', 'test123');

// // 异步创建一个文件
// fs.writeFile('./test2.txt', 'test123', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件创建成功');
//   }
// });

// 异步追加写入一个文件
// fs.appendFile('./test.txt', 'test123', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('文件追加成功');
//   }
// });

// // 同步追加写入一个文件
// fs.appendFileSync('./test1.txt', 'test123');

// 异步读取文件
fs.readFile('./test.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(1)

    console.log(data.toString())
  }
})
// 同步读取文件
const msg = fs.readFileSync('./test.txt')
console.log(2)
console.log(msg.toString()) // 转换为字符串

