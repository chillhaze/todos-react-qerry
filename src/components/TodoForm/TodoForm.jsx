import { Form, Input, Button } from './TodoForm.styled';
import { useCreateTodo } from 'hooks/useCreateTodo';

export const TodoForm = () => {
  const { createTodo, isCreating } = useCreateTodo();

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(e.currentTarget.elements.content.value);
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="content" rows="3" autoFocus />
      <Button type="submit" disabled={isCreating}>
        Create todo
      </Button>
    </Form>
  );
};
