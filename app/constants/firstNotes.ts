import { VariantType } from '../components/Card/card';

export interface NoteType {
  id: string;
  title: string;
  content: string;
  variant: VariantType;
  createdAt: number;
}

const firstNotes: NoteType[] = [
  {
    id: 'IFFJIDF',
    title: 'First Note',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel doloremque minima, fugiat, odit voluptate ullam rem dignissimos tempora obcaecati, odio dicta. Laboriosam sapiente itaque provident ex omnis fugiat ullam accusamus!',
    variant: 0,
    createdAt: 1640353823913,
  },
  {
    id: 'FJKjfj22',
    title: 'important thin',
    content: 'This is the small note',
    variant: 2,
    createdAt: 1640357039655,
  },
  {
    id: 'JFIFJKF',
    title: 'shopping',
    content: 'remind me to buy milk, eggs, bread, etc',
    variant: 5,
    createdAt: 1640357076197,
  },
];

export default firstNotes;
