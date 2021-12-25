import { Edit2, Trash } from 'iconsax-react';
import { useNavigate, useSubmit } from 'remix';
import { Button } from '..';
import { NoteType } from '../../constants/firstNotes';
import {
  CardContainer,
  CardHeader,
  ActionGroup,
  CardTitle,
  CardDescription,
} from './card.style';

export type VariantType = number;

interface CardProps {
  note: NoteType;
}

export const Card = ({ note: { variant, title, content, id } }: CardProps) => {
  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    navigate(`/note/${id}`);
  };
  const handleDeleteButtonClick = async () => {
    const formData = new FormData();
    formData.append('id', id);
    const res = await fetch(`/api/note`, {
      method: 'DELETE',
      body: formData,
    });
    const data = await res.json();

    if (!data.error) {
      navigate('/');
    }
  };
  return (
    <CardContainer variant={variant}>
      <CardHeader variant={variant}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription>{content}</CardDescription>
      <ActionGroup variant={variant}>
        <Button
          onClick={handleEditButtonClick}
          text='Edit'
          Icon={Edit2}
          variant={variant}
        />
        <Button
          onClick={handleDeleteButtonClick}
          text='Delete'
          Icon={Trash}
          variant={variant}
        />
      </ActionGroup>
    </CardContainer>
  );
};
