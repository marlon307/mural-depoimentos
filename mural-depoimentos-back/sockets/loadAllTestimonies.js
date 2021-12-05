const { getAllTestimonies } = require('../models/testimonies')
//Responsável por carregar todas as informações
module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('loadAllDepoiment', async () => {
      const result = await getAllTestimonies();
      io.emit('returnloadAllDepoiment', result)
    })
  })
}
