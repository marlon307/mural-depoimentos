const { createTestimony, getAllTestimonies } = require('../models/testimonies')
//Responsável por inserir um novo depoimento e retornar um objeto caso aja sucesso na inserção da informação
module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('sendDepoiment', async ({ userName, testimonial }) => {
      const result = await createTestimony(userName, testimonial);
      io.emit('resTestimony', result)
    })
  })
}
