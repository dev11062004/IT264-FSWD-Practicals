const http = require('http');
const fs = require('fs');
const path = require('path');


const publicDir = path.join(__dirname, 'public');
const server = http.createServer((req, res) => {
  
    let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

    
    const ext = path.extname(filePath);

  
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.js': 'application/javascript'
    }[ext] || 'application/octet-stream';

    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
               
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            } else {
               
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
           
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
