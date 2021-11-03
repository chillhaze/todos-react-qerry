import { TodoItem } from '../TodoItem/TodoItem';
import { List } from './TodoList.styled';

export const TodoList = ({ todos }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};
