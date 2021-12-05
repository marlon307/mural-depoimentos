const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);

const PORT = 3001;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET'],
  },
});

app.use(express.json());
app.use(cors());

require('./sockets/testimonies')(io);
require('./sockets/loadAllTestimonies')(io);

http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
