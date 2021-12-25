import { useEffect, useState } from 'react';
import { ActionFunction, Form, useActionData } from 'remix';
import colors from '../../constants/colors';
import { NoteType } from '../../constants/firstNotes';
import {
  ColorButton,
  ColorGroup,
  NoteContainer,
  NoteContentInput,
  NoteError,
  NoteSubmit,
  NoteTitleInput,
  NoteVariantInput,
  VariantTitle,
} from './note.style';

interface NoteProps {
  note?: NoteType;
}
export const Note = ({ note }: NoteProps) => {
  const [Title, setTitle] = useState<string>(note?.title || '');
  const [Content, setContent] = useState<string>(note?.content || '');
  const [Variant, setVariant] = useState<number>(note?.variant || 0);
  const actionData = useActionData();
  useEffect(() => {
    console.log('note => ', note);
  }, [note]);

  return (
    <NoteContainer>
      <Form method='post'>
        <NoteTitleInput
          autoFocus
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <NoteContentInput
          value={Content}
          onChange={(e) => setContent(e.target.value)}
        />
        <NoteVariantInput>
          <VariantTitle>Choose a color:</VariantTitle>
          <ColorGroup>
            {colors.map((color, index) => (
              <ColorButton
                onClick={() => setVariant(index)}
                isChecked={Variant === index}
                color={color}
                key={color}
                type='button'
              />
            ))}
          </ColorGroup>
          <input type='hidden' name='variant' value={Variant} />
        </NoteVariantInput>
        <NoteSubmit>Save</NoteSubmit>
        {actionData && <NoteError>{actionData}</NoteError>}
      </Form>
    </NoteContainer>
  );
};
