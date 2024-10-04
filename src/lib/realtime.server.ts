import { Server as IServer } from 'http';
import { Server as RealtimeServer } from 'socket.io';

export const useSocketIo = (server: IServer): RealtimeServer => {
  const io = new RealtimeServer(server, {
    transports: ['polling', 'websocket'],
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  return io;
};
