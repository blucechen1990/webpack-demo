var http = require('http');
var fs = require('fs');

const zlib = require('zlib');
const inputStream = fs.createReadStream('./message.txt')

http.createServer(function (req, res) {
  console.log(req.headers['accept-encoding'])
  if (req.url !== 'favicon.ico') {
    res.setHeader('content-encoding', 'gzip')
    inputStream.pipe(zlib.createGzip()).pipe(res)
  }
  // res.end();
}).listen(9000, "127.0.0.1");