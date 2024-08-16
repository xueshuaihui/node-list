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

// 流式写入
// const ws = fs.createWriteStream('./test.txt')
// ws.write('123\n\r')
// ws.write('456\n\r')
// ws.write('789\n\r')
// // ws.end()
// ws.end('10')


// 异步读取文件
// fs.readFile('./test.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(1)

//     console.log(data.toString())
//   }
// })
// // 同步读取文件
// const msg = fs.readFileSync('./test.txt')
// console.log(2)
// console.log(msg.toString()) // 转换为字符串

// 流式读取
// const rs = fs.createReadStream('./test.txt')
// rs.on('data', (data) => {
//   console.log(data.toString())
// })
// rs.on('end', () => {
//   console.log('读取结束')
// })
// rs.on('error', (err) => {
//   console.log(err)
// })


// 异步删除文件
// fs.unlink('./test.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('文件删除成功')
//   }
// })

// 同步删除文件
// fs.unlinkSync('./test1.txt') 

// 重命名文件
// fs.rename('./test2.txt', './test.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('文件重命名成功')
//   }
// })

// // 同步重命名文件
// fs.renameSync('./test.txt', './test2.txt')

// 复制文件
// fs.copyFile('./test2.txt', './test.txt', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   } console.log('文件复制成功')
// })

// 同步复制文件
// fs.copyFileSync('./test.txt', './test4.txt')



// 读取目录
fs.readdir('./', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// 同步读取目录
// const msg = fs.readdirSync('./')
// console.log(msg)


