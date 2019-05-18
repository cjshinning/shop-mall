var http = require('http')

http.get('https://coding.imooc.com/index/getadver', res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    })
    res.on('end', ()=>{
        let result = JSON.parse(data);
        console.log(result);
    })
})