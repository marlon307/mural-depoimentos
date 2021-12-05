const { createTestimony, getAllTestimonies } = require('../models/testimonies')

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('sendDepoiment', async ({ userName, testimonial }) => {
      const result = await createTestimony(userName, testimonial);
      io.emit('resTestimony', result)
    })
  })
}
