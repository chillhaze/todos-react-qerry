import Loader from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </SpinnerWrapper>
  );
};
