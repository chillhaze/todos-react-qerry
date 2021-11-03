import styled from '@emotion/styled';
import { ImSpinner3 } from 'react-icons/im';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  color: #1890ff;
  &:hover {
    background-color: #d9d9d9;
  }
`;

const Icon = ({ spinner }) => <ImSpinner3 size="24" className={spinner} />;

export const SpinnerIcon = styled(Icon)`
  animation: spin infinite 500ms linear;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(1turn);
    }
  }
`;
