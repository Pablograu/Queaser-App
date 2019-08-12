import React from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN-STACK Queaseres App</h2>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
