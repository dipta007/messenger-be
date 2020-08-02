import { Connection } from 'mongoose';
import { RoomSchema } from './room.schema';

export const roomProviders = [
  {
    provide: 'ROOM_MODEL',
    useFactory: (connection: Connection) => connection.model('Room', RoomSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];