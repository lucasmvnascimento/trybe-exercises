module.exports = (io) => {
  io.on('connection', (socket) => {

    //Envia mensagem para todos os clientes, EXCETO quem disparou o evento 'connection'
    socket.broadcast.emit('serverMessage',`Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);

    //Evento disparado quando cliente fecha ou recarrega a página
    socket.on('disconnect', () => {
      socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
    });


    socket.on('clientMessage', (message) => {
      console.log(`Mensagem: ${message}`);
      io.emit('serverMessage', `${socket.id}: ${message}`);
    });
  });
};