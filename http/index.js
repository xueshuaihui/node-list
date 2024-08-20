// 导入 Node.js 内置的 http 模块
const http = require('http')

// 创建一个 HTTP 服务器并监听特定的请求
const server = http.createServer((req, res) => {
    // 发送响应数据 'Hello World'
    res.end('Hello World')
})

// 使服务器在指定的端口上监听连接
server.listen(3000, () => console.log('Server is running on port 3000'))

