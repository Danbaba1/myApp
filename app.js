const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
    } else if (req.url === '/contact-me') {
        filePath = path.join(__dirname, 'contact-me.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
    } else {
        filePath = path.join(__dirname, '404.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.end(data);
        }
    });
});

server.listen(8080, 'localhost', () => {
    console.log('Server is listening on port 8080');
});
