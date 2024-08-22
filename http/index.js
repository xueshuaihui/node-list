// 导入 Node.js 内置的 http 模块
const http = require('http')

// 创建一个 HTTP 服务器并监听特定的请求
const server = http.createServer((req, res) => {
  // // 解析请求报文
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.headers)
  // // 获取url携带的参数
  // const url = new URL(req.url, `http://${req.headers.host}`)
  // // 获取 URL 中的查询参数对象
  // const params = url.searchParams
  // console.log(params);

  // // 打印出查询参数对象中的所有参数
  // for (const [key, value] of params.entries()) {
  //   console.log(`Param: ${key}, Value: ${value}`)
  // }

  // 设置响应
  // res.setHeader('Content-Type', 'text/plain')
  // res.statusCode = 201
  // res.statusMessage = 'Not Found'
  // res.setHeader('Access-Control-Allow-Origin', '*')
  res.write('Hello, World!')
  res.write('2423')
  // res.end()
  res.end('Hello, World!')

})

// 使服务器在指定的端口上监听连接
server.listen(3000, () => console.log('Server is running on port 3000'))
