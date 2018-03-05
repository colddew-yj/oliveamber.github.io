
var http = require('http');
const Mock = require('mockjs')
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // let data = Mock.mock('/', {status:'000'})
    // 发送响应数据 "Hello World"
    response.end("hello word")
    // console.log(JSON.stringify(data))
}).listen(8888);