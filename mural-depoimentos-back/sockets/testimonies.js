const { createTestimony } = require('../models/testimonies')

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('createTestimony', async ({ userName, text }) => {
      const testimonies = await createTestimony(userName, text);
      io.emit('resTestimony', testimonies)
    })
  })
}
