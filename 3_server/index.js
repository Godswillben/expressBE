const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/frends") {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end(JSON.stringify({
            id: 1,
            name: 'Sir Isaac Newton',
        }));

    }else if(req.url==="/messages"){
        res.setHeader('Content-Type', 'text/html');
        res.end();
    }
});

server.listen(PORT, () => { })
