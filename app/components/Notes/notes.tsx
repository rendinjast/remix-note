import { useEffect, useRef, useState } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import { Card } from '..';
import { NoteType } from '../../constants/firstNotes';
import useEventListener from '../../hooks/useEventListener';
import { NotesColumn, NotesContainer } from './notes.style';

export const loader: LoaderFunction = async () => {
  return 'ok';
};

export const Notes = () => {
  const container = useRef<HTMLDivElement>(null);
  const [Columns, setColumns] = useState<number>(0);
  const notes = useLoaderData<NoteType[]>();

  const handleColumn = () => {
    const _columns = Math.floor(container.current?.clientWidth! / 296);
    setColumns(_columns);
  };

  useEventListener('resize', handleColumn);
  useEffect(() => {
    handleColumn();
  }, []);

  return (
    <NotesContainer ref={container}>
      {Array.from(Array(Columns).keys()).map((order) => (
        <NotesColumn key={order}>
          {notes
            .sort((a, b) => b.createdAt - a.createdAt)
            .filter((_, index) => index % Columns === order)
            .map((note) => (
              <Card key={note.id} note={note} />
            ))}
        </NotesColumn>
      ))}
    </NotesContainer>
  );
};
