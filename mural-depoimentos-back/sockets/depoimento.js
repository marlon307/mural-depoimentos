module.exports = (io) =>
  io.on('connection', (socket) => {
    socket.on('sendTestimonial', async ({ userName, text }) => {
      //Comunicação com o banco de dados
    })
  });
