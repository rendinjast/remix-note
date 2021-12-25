import styled from 'styled-components';

interface IAppProps {
  color: string;
}
export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-top: 114px;
  padding: 0 12px;
`;
