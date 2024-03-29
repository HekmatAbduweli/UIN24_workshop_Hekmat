import { useEffect, useState } from "react";
import "./App.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);

  function updateTodo(index) {
    const currentTodos = [...todos]
    currentTodos[index].completed = !currentTodos[index].completed
    setTodos(currentTodos)
  }

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let todotext = document.getElementById("newtodo").value;
        if (todotext) {
          setTodos([...todos, { title: todotext, completed: false }]);
          //todotext = document.getElementById("newtodo").value=""
        }
      }
    });
  }, [todos]);
  console.log(todos);

  return (
    <>
      <Typography variant="h2" component="h1">
        To Do
      </Typography>
      <TextField id="newtodo" label="Ny todo-oppgave" variant="outlined" />
      <List>
        {todos.map((todo, index) => (
          todo.completed === false ?
          <ListItem key={index}>
            <ListItemIcon>
              <Checkbox
                checked={todo.completed}
                onChange={() => {
                  updateTodo(index);
                }}
              />
            </ListItemIcon>
            <ListItemText primary={todo.title} />
          </ListItem>: null
        ))}
      </List>
      <Typography variant="h3" component="h2">Completed</Typography>
      <List>
        {todos.map((todo, index) => (
          todo.completed === true?
          <ListItem key={index}>
            <ListItemIcon>
              <Checkbox
                checked={todo.completed}
                onChange={() => {
                  updateTodo(index);
                }}
              />
            </ListItemIcon>
            <ListItemText sx={{textDecoration: "line-through"}}  primary={todo.title} />
          </ListItem>: null
        ))}
      </List>
    </>
  );
}

export default App;
