import { Button, SpinnerIcon } from './IconButton.styled';

export const IconButton = ({
  icon: Icon,
  onClick = () => null,
  loading = false,
}) => {
  return (
    <Button type="button" onClick={onClick} disabled={loading}>
      {loading ? <SpinnerIcon /> : <Icon size="16" />}
    </Button>
  );
};
