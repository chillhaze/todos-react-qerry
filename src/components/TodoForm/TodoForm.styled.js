import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  padding: 16px;
  margin: 0 auto;
`;

export const Input = styled.textarea`
  font: inherit;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  resize: none;
`;

export const Button = styled.button`
  padding: 8px 12px;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font: inherit;
  cursor: pointer;
  &:hover {
    background-color: #096dd9;
  }

  &:disabled {
    background-color: #8c8c8c;
    pointer-events: none;
  }
`;
