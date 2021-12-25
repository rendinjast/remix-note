import { ActionFunction, json, LoaderFunction, redirect } from 'remix';
// import redis from '../../../config/redis';
import Redis from 'ioredis';
import { NoteType } from '../../constants/firstNotes';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'DELETE')
    return { message: 'method not allowed', error: true };

  const body = await request.formData();
  console.log(body);
  const { id } = Object.fromEntries(body);
  if (!id) return { message: 'invalid id', error: true };

  const redis = new Redis(process.env.REDIS_SERVER);
  const _allNotes = await redis.get('notes');
  console.log(_allNotes);

  const allNotes = _allNotes ? (JSON.parse(_allNotes) as Array<NoteType>) : [];
  const modifiedNotes = allNotes.filter((note) => note.id !== id);
  const setData = await redis.set('notes', JSON.stringify(modifiedNotes));

  if (setData !== 'OK')
    return { message: 'something went wrong!', error: true };
  return { message: 'ok', error: false };
};
