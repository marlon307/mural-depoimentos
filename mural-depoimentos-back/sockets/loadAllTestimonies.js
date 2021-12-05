const { getAllTestimonies } = require('../models/testimonies')
//Responsavel por carregar todas as infomações
module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('loadAllDepoiment', async () => {
      const result = await getAllTestimonies();
      io.emit('returnloadAllDepoiment', result)
    })
  })
}
