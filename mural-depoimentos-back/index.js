const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 3010;
const URL = `http://localhost:${PORT}/`;

const io = require('socket.io')(http, {
  cors: {
    origin: URL,
    methods: ['GET', 'POST'],
  }
});

http.listen(PORT, () => {
  console.log(`Server on ${URL}`);
});
