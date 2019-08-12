import React from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component'
import EditTodo from './components/edit-todo.component'
import TodosList from './components/todos-list.component'

import logo from './logo.png'


function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="nav navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#" target="_blank">
            <img src={logo} width="30" height="30" alt="cara logo" />
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Queaser App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Queaseres</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Crear Queaseres</Link>
              </li>
              <li className="navbar-item">
                <Link to="/edit" className="nav-link">Editar Queaseres</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
