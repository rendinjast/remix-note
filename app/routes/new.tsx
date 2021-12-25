import { ActionFunction, MetaFunction, redirect } from 'remix';
import { nanoid } from 'nanoid';
import redis from '../../config/redis';
import { Note } from '../components';

export const meta: MetaFunction = () => {
  return { title: '✏️ Take A Note' };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const { title, content, variant } = Object.fromEntries(body);
  if (!title || !content || !variant) return 'empty value is not valid!';

  const _allNotes = await redis.get('notes');
  const allNotes = _allNotes ? JSON.parse(_allNotes) : [];
  console.log(nanoid(5));

  const setData = await redis.set(
    'notes',
    JSON.stringify([
      ...allNotes,
      {
        id: nanoid(6),
        title,
        content,
        variant: parseInt(variant.toString()),
        createdAt: Date.now(),
      },
    ])
  );

  if (setData !== 'OK') return 'something went wrong!';
  return redirect('/');
};

const NewNote = () => {
  return <Note />;
};

export default NewNote;
