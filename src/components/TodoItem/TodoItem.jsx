import { FaTrash } from 'react-icons/fa';
import { IconButton } from '../IconButton/IconButton';
import { ItemWrapper, Content } from './TodoItem.styled';
import { useDeleteTodo } from 'hooks/useDeleteTodo';

export const TodoItem = ({ id, content }) => {
  const { deleteTodo, isDeleting } = useDeleteTodo();

  return (
    <ItemWrapper>
      <Content>{content}</Content>
      <IconButton
        icon={FaTrash}
        loading={isDeleting}
        onClick={() => deleteTodo(id)}
      />
    </ItemWrapper>
  );
};
