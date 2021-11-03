import axios from 'axios';
// ----------------------------React Query
import { useQuery } from 'react-query';

const fetchTodoById = async todoId => {
  const response = await axios.get(`/todos/${todoId}`);
  return response.data;
};

export const useFetchTodoById = todoId => {
  // третим аргументом передаю options
  const { data, isLoading } = useQuery(
    ['/todos', todoId],
    () => fetchTodoById(todoId),
    {
      enabled: todoId !== undefined,
    },
  );

  return {
    todo: data,
    isLoading,
  };
};
