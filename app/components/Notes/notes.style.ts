import styled from 'styled-components';

export const NotesContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  @media screen and (max-width: 1206px) {
    justify-content: space-around;
    padding: 2px 144px;
  }
`;

export const NotesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 13px;
`;
