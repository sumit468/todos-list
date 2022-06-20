import './App.css';
import Header from './components/Header';
import { Footer } from "./components/Footer";
import { Todos } from "./components/Todos";
import { useState } from 'react';
import { AddTodo } from './components/AddTodo';

function App() {
  const deleteItem = (todo) => {
    console.log("Deleting Item....", todo)
    //Deleting this way will not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("I am adding this todo", title, desc);

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    //Updating Todos
    setTodos(
      [...todos, myTodo]
    )
    console.log(myTodo)

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this 1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this done2"
    },
    {
      sno: 3,
      title: "Go to the temple",
      desc: "You need to go to the market to get this done3"
    }
  ])

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={deleteItem} />

      <Footer />
    </>
  );
}

export default App;
