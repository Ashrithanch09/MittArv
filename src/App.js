// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteDetailsPage from './pages/NoteDetailsPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/note/:id" component={NoteDetailsPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
