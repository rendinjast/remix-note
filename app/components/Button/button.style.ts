import styled from 'styled-components';
import { rgba } from 'polished';
import { VariantType } from '../Card/card';
import colors from '../../constants/colors';

interface ButtonProps {
  variant: VariantType;
}
export const Btn = styled.span<ButtonProps>`
  background-color: ${(props) => rgba(colors[props.variant], 0.25)};
  display: flex;
  border-radius: 12px;
  justify-content: space-around;
  align-items: center;
  padding: 7px;
  gap: 4px;
  cursor: pointer;

  &:hover svg {
    transform: translateY(-2px) scale(1.2);
  }
`;
export const BtnTitle = styled.span<ButtonProps>`
  color: ${(props) => colors[props.variant]};
`;
