'use strict';
const http = require('http')

const PORT = 8000

function handleRequest (request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
