import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from 'remix';
import redis from '../../../config/redis';
import { Note } from '../../components';
import { NoteType } from '../../constants/firstNotes';

export const meta: MetaFunction = ({ data }) => {
  return { title: `Edit -> ${data.title}` };
};

export const loader: LoaderFunction = async ({ params }) => {
  const res = await redis.get('notes');
  if (!res) return null;

  const data: NoteType[] = JSON.parse(res);
  const note = data.find((note) => note.id === params.id);

  return note;
};

export const action: ActionFunction = async ({ request, params }) => {
  const id = params.id;
  const body = await request.formData();
  const { title, content, variant } = Object.fromEntries(body);
  if (!title || !content || !variant) return 'empty value is not valid!';

  const _allNotes = await redis.get('notes');
  const allNotes = _allNotes ? (JSON.parse(_allNotes) as Array<NoteType>) : [];
  const targetNote = allNotes.find((note) => note.id === id);
  const modifiedNotes = allNotes.filter((note) => note.id !== id);
  const setData = await redis.set(
    'notes',
    JSON.stringify([
      ...modifiedNotes,
      {
        id,
        title,
        content,
        variant: parseInt(variant.toString()),
        createdAt: targetNote?.createdAt,
      },
    ])
  );

  if (setData !== 'OK') return 'something went wrong!';
  return redirect('/');
};

const NoteView = () => {
  const note = useLoaderData<NoteType | null>();

  if (!note) return <p>Note not found</p>;
  return <Note note={note} />;
};

export default NoteView;
