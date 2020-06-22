
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import About from '../About/About';
import Todo from '../Todo/Todo';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <div className={styles.link_wrap}>
        <Link exact={"true"} to="/" className={styles.link}>Обо мне</Link>
        <Link to="/todo" className={styles.link}>Список дел</Link>
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

 

