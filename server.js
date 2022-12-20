const http = require('http');

http.createServer(function (request, response) {
   
  console.log('*** Hello World 2  Ver 1.0.0 ***');

  console.log('@method=' + request.method);

  console.log('@headers=' + JSON.stringify(request.headers));

  if (request.method == 'POST') {
    var body = '';
    // data受信イベントの発生時に断片データ(chunk)を取得
    // body 変数に連結
    request.on('data', function(chunk) {
        body += chunk;
    });
    
    // 受信完了(end)イベント発生時
    request.on('end', function() {
      console.log('@body=' + body);
    });
  }

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(msg);

}).listen(8083);

