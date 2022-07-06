const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html ');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>time and date website</title>
      <style>
          #time{
              font-size: 23px;
              border: 2px solid blue;
              background-color: aquamarine;
              padding: 34px;
              margin:4px;
              text-align: center;
              font-weight: bold;
              border-radius: 2px;
              border-width: 100%;
          }
      </style>
  </head>
  <body>
      <span id="time"></span>
      <script>
          function displaytime(){
             let time=new Date();
              console.log(time);
              document.getElementById('time').innerHTML=time;
          }
          setInterval(displaytime,1000);
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});