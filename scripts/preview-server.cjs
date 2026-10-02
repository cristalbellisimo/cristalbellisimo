const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.mp4': 'video/mp4',
  '.m4v': 'video/mp4',
  '.mov': 'video/quicktime',
  '.ogg': 'video/ogg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.webp': 'image/webp'
};

http.createServer((request, response) => {
  let filePath;

  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    filePath = path.resolve(root, `.${pathname}`);
    if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== root) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    if (fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
    if (!fs.statSync(filePath).isFile()) throw new Error('Not a file');
  } catch {
    response.writeHead(404).end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
  });
  fs.createReadStream(filePath).pipe(response);
}).listen(8123, '127.0.0.1', () => {
  console.log('Preview available at http://localhost:8123');
});