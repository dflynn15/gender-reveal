import io from 'socket.io';

export default class Socket {
  constructor(server) {
    this.socket = io(server);
    this.monitorConnections();
  }
  monitorConnections() {
    this.socket.on('connection', client => {
      console.log('a user connected');
      client.on('disconnect', function() {
        console.log('user disconnected');
      });
    });
  }

  emitStatus(status) {
    this.socket.emit('updateStatus', status);
  }
}
