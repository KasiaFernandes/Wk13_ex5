var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === "GET" && request.url === "/") {
        response.write("<h1>Hello World!<h1>");
        response.end();
    } else {
        response.statusCode = 404;
        fs.readFile("./monster.jpg", function(err, data) {
            if (err) throw err;
            console.log(data);
        })
    }
});

server.listen(8080);
