
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import styles from './App.module.css';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Card from '@material-ui/core/Card';
import Logo from '../Img/logo-whs.png'

const App = () => (
  <Router>
    <div className={styles.content}>
      <div className={styles.link_wrap}>
        <NavLink exact to="/" className={styles.link} activeClassName={styles.active_link}>Обо мне</NavLink>
        <NavLink to="/todo" className={styles.link} activeClassName={styles.active_link}>Дела</NavLink>
      </div>
      <Card className={styles.wrap}>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/todo" component={Todo} />
        </Switch>
        <div className={styles.develop}>
          <span className={styles.develop_in}>разработано в <img alt="whs" src={Logo} /></span>
        </div>
      </Card> 
    </div>  
  </Router> 
)

export default App;

 

