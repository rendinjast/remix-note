import styled from 'styled-components';

export const NoteContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 870px) {
    width: 80%;
  }
  @media screen and (max-width: 560px) {
    width: 96%;
  }
`;

export const NoteTitleInput = styled.input.attrs({
  placeholder: 'note title...',
  type: 'text',
  name: 'title',
})`
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 40px;
  padding: 14px 24px;
  font-size: 1.3rem;
  margin-bottom: 14px;
  @media screen and (max-width: 560px) {
    font-size: 1rem;
  }
`;

export const NoteContentInput = styled.textarea.attrs({
  placeholder: 'content',
  name: 'content',
})`
  padding: 14px 24px;
  min-height: 250px;
  width: 100%;
  color: #424242;
  border: 1px solid #e6e6e6;
  border-radius: 40px;
  resize: vertical;
  font-size: 1.1rem;
  margin-bottom: 14px;
  @media screen and (max-width: 560px) {
    font-size: 0.9rem;
  }
`;

export const NoteVariantInput = styled.div`
  padding: 14px 24px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 34px;
`;
export const VariantTitle = styled.span`
  text-align: center;
  @media screen and (max-width: 560px) {
    font-size: 0.9rem;
  }
`;
export const ColorGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 12px;
  @media screen and (max-width: 560px) {
    gap: 6px;
  }
`;
export const ColorButton = styled.button<{
  color: string;
  isChecked?: boolean;
}>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  outline: none;
  ::before {
    content: '✔';
    font-size: ${(props) => (props.isChecked ? '1.3rem' : '0')};
    color: white;
    top: 0;
    left: 50%;
    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-width: 1200px) {
    width: 28px;
    height: 28px;
  }
  @media screen and (max-width: 560px) {
    width: 18px;
    height: 18px;
    ::before {
      font-size: ${(props) => (props.isChecked ? '0.9rem' : '0')};
    }
  }
`;
/* transform: translate(-50%, -50%); */
export const NoteSubmit = styled.button.attrs({
  type: 'submit',
})`
  padding: 14px 24px;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 40px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #3e3e3e;
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const NoteError = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: bold;
  margin: 10px 0;
`;
