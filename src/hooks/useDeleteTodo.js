import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

const deleteTodo = async id => {
  const response = await axios.delete(`/todos/${id}`);
  return response.data;
};

export const useDeleteTodo = id => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteTodo, {
    onSuccess() {
      queryClient.invalidateQueries('/todos');
      toast.error('Todo deleted!');
    },
  });
  return {
    deleteTodo: mutateAsync,
    isDeleting: isLoading,
  };
};
