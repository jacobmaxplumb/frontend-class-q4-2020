const http = require('http');
const quote = require('./quote');

http.createServer((req, res) => {
    res.write(quote.getRandomQuote());
    res.end();
}).listen(3000, () => {console.log('running on port 3000')});