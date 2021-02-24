const http = require('http');

const name = {name: 'jacob', age: 20};

http.createServer((req, res) => {
    res.write('hello');
    res.end();
}).listen(8888, () => console.log('listening on port 8888'))