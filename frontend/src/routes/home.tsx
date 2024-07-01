import { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useRecoilValue } from 'recoil';

import { Header } from '../components/organisms/Header';
import { authState } from '../store/auth';

export const Route = createFileRoute('/home')({
  component: Home,
});
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function Home() {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  useEffect(() => {
    // 本当はbeforeLoadedを使いたかったが、RecoilのuseRecoilValueは非同期で、beforeLoadedの段階では更新後の値が取れないため、ここでチェック
    // やり方わかったら修正する
    if (!auth.token) {
      navigate({
        to: '/login',
      });
    }
  }, [auth, navigate]);

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = { id: Date.now(), text: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Title>Todo List</Title>
        <TodoContainer>
          {todos.map((todo) => (
            <TodoItem key={todo.id}>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <TodoText
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </TodoText>
              <IconButton onClick={() => deleteTodo(todo.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </TodoItem>
          ))}
          <AddTodoForm>
            <TextField
              variant="outlined"
              fullWidth
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
            />
            <AddTodoButton
              variant="contained"
              color="primary"
              onClick={addTodo}
            >
              Add
            </AddTodoButton>
          </AddTodoForm>
        </TodoContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#011627',
  padding: '2rem',
});

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#FFFFFF',
});

const TodoContainer = styled(Container)({
  backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
});

const TodoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
  borderBottom: '1px solid #4B5D67',
});

const TodoText = styled(Typography)({
  flexGrow: 1,
  marginLeft: '0.5rem',
});

const AddTodoForm = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1rem',
});

const AddTodoButton = styled(Button)({
  marginLeft: '1rem',
});
