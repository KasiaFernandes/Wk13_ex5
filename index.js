var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    if (request.method === "GET" && request.url === "/") {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.write("<h1>Hello World!<h1>");
        response.end();
    } else if (response.statusCode = 404) {
        response.setHeader("Content-Type", "image/jpeg");
        fs.readFile("./monster.jpg", function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end(); 
        });     
    }
});

server.listen(8080);
