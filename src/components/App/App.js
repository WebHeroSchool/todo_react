
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import styles from './App.module.css';
import About from '../About/About';
import Todo from '../Todo/Todo';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <div className={styles.link_wrap}>
        <NavLink exact to="/" className={styles.link} activeClassName={styles.active_link}>Обо мне</NavLink>
        <NavLink to="/todo" className={styles.link} activeClassName={styles.active_link}>Дела</NavLink>
      </div>
      <div>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </div>
    </div>
  </Router> 
)

export default App;

 

