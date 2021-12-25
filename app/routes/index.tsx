import { LoaderFunction, MetaFunction } from 'remix';
import redis from '../../config/redis';
import { Notes } from '../components';
import firstNotes from '../constants/firstNotes';

export const loader: LoaderFunction = async () => {
  const getNotes = await redis.get('notes');
  if (!getNotes) {
    await redis.set('notes', JSON.stringify(firstNotes));
    return firstNotes;
  }

  return JSON.parse(getNotes);
};
const Index = () => {
  return <Notes />;
};

export default Index;
