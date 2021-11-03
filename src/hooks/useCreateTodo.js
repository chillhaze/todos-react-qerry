import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';

const createTodo = async content => {
  const response = await axios.post('/todos', { content });
  return response.data;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(createTodo, {
    onSuccess() {
      //синхронизация данных в кеше с данными на беке, передаем ключ того, что хотим инвалидировать (в нашем случае '/todos')
      queryClient.invalidateQueries('/todos');
      toast.success('Todo created!');
    },
  });
  return {
    createTodo: mutateAsync,
    isCreating: isLoading,
  };
};
