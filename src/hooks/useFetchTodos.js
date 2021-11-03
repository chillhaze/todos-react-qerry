import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import { useRef } from 'react';
// ----------------------------React Query
import { useQuery } from 'react-query';

const fetchTodos = async () => {
  const response = await axios.get('/todos');
  return response.data;
};

export const useFetchTodos = () => {
  // const hasFatched = useRef(false);
  const { data, isLoading, isFetchedAfterMount } = useQuery(
    '/todos',
    fetchTodos,
    {
      onSuccess() {
        if (!isFetchedAfterMount) {
          toast.success('Todos loaded!');
        }
      },
      // onSuccess() {
      //   if (!hasFatched.current) {
      //     toast.success('Todos loaded!');
      //     hasFatched.current = true;
      //   }
      // },
    },
  );

  return {
    todos: data,
    isLoading,
  };
};
