const { getAllTestimonies } = require('../models/testimonies')

module.exports = (io) => {
  io.on('connection', async (socket) => {

    const alltestimonies = await getAllTestimonies();
    io.emit('resAllTestimony', alltestimonies)

  })
}
