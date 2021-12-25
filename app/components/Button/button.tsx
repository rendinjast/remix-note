import { Icon } from 'iconsax-react';
import { ReactComponentElement, ReactNode } from 'react';
import colors from '../../constants/colors';
import { Btn, BtnTitle } from './button.style';

interface ButtonProps {
  text: string;
  Icon?: Icon;
  variant: number;
  onClick?: () => void;
}
export const Button = ({ Icon, text, variant, onClick }: ButtonProps) => {
  return (
    <Btn variant={variant} onClick={onClick}>
      {Icon && <Icon color={colors[variant]} variant='Bulk' />}
      <BtnTitle variant={variant}>{text}</BtnTitle>
    </Btn>
  );
};
