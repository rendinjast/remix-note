import styled from 'styled-components';
import colors from '../../constants/colors';
import { rgba } from 'polished';
import { VariantType } from './card';

interface CardProps {
  variant: VariantType;
}

export const CardContainer = styled.div<CardProps>`
  position: relative;
  width: 275px;
  overflow: 'hidden';
  padding: 14px;
  border-radius: 32px;
  background-color: white;
  border-style: solid;
  border-width: 6px;
  box-shadow: 0 10px 30px ${(props) => rgba(colors[props.variant], 0.6)};
  border: 4px solid ${({ variant }) => colors[variant]};
`;

export const CardHeader = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ variant }) => colors[variant]};
`;
export const CardTitle = styled.div`
  font-size: 0.85rem;
  letter-spacing: 1px;
  font-weight: bold;
`;
export const CardDescription = styled.span`
  font-size: 0.85rem;
  line-height: 2;
  word-spacing: 1px;

  color: #6d6d6d;
`;

export const ActionGroup = styled.div<CardProps>`
  width: 100%;
  background-color: white;
  padding: 4px;
  border-radius: 10px;
  bottom: 8px;
  right: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  svg {
    transition: transform 0.3s ease-in-out;
  }
`;
