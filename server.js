const http = require('node:http');
const { dataExport } = require('./data.js');
const server = http.createServer((req, res) => {
  console.log('request recived');
  res.end(`<!DOCTYPE html>
  <html lang="es">
  ${dataExport.head}
      <body>
          <main >
           ${dataExport.title}   
           ${dataExport.subtitle}
           ${dataExport.list}
          </main> 
          
      </body>
  </html>`);
});
server.listen(0, () => {
  console.log(`server listening on port ${server.address().port}`);
});
