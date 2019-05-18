let user = require('./User');

console.log(`userName: ${user.userName}`)

console.log(`I'm ${user.userName}, I say ${user.sayHello()}`)

let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain; charset=utf-8");

    console.log(`url: ${req.url}`)  ///index.html?a=123&b=12
    console.log(`parse: ${url.parse(req.url)}`);
    console.log(`inspect ${util.inspect(url.parse(req.url))}`)

    res.end(util.inspect(url.parse(req.url)));
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log('服务器已经运行，请打开浏览器，输入http://127.0.0.1来进行查看');
});