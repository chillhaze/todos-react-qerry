import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';
import { Spinner } from './Spinner/Spinner';
import { useFetchTodos } from 'hooks/useFetchTodos';

axios.defaults.baseURL = 'https://6182c42302f60a001775ceca.mockapi.io/todos/';

export const App = () => {
  const { todos, isLoading } = useFetchTodos();

  return (
    <>
      <TodoForm />
      {isLoading && <Spinner />}
      {!isLoading && todos && <TodoList todos={todos} />}
      <Toaster position="top-right" />
    </>
  );
};
