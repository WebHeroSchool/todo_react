
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Todo from '../Todo/Todo';

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <Card>
        <MenuList>
          <Link exact to="/" className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
          <Link to="/contacts" className={styles.link}><MenuItem>Контакты</MenuItem></Link>
          <Link to="/todo" className={styles.link}><MenuItem>Список дел</MenuItem></Link>
        </MenuList>
      </Card>
      <Card>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </Card>
    </div>
  </Router> 
)

export default App;

 

