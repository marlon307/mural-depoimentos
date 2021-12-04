const { createTestimony, getAllTestimonies } = require('../models/testimonies')

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('sendDepoiment', async ({ userName, testimonial }) => {
      // console.log(userName, testimonial);
      await createTestimony(userName, testimonial);
      const alltestimonies = await getAllTestimonies();
      io.emit('resTestimony', alltestimonies)
    })
  })
}
