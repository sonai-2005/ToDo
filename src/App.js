import './App.css';
import Header from "./myComponents/header"
import { Footer } from "./myComponents/Footer"
import { List } from "./myComponents/Todos"
import React, { useState, useEffect } from 'react';
import { Add } from './myComponents/addtodo';
import {About} from './myComponents/about';
import {Contact} from './myComponents/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        console.log(todo.sno, "deleted ! ");
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    const addToDo = (title, desc) => {//add to do function
        let sno;
        if (todos.length == 0) {
            sno = 1;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, myTodo]);

    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {//to save the change if the input, todos changes the localstorage function called and saved 
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    return (
        <>
        <Router>
            <Header title="SaptarshiToDo" searchBar={true} />
            <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Add AddToDo={addToDo} />
            <List todos={todos} onDelete={onDelete} />
            </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
            {/* this is add for contact */}
          <Route exact path="/contact">
            <Contact />
          </Route>

        </Switch>
            
            <Footer />
        </Router>
        </>
    );
}

export default App;
