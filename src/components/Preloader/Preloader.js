import React from 'react';
import load from '../Img/preloader.gif';
import styles from './Preloader.module.css';
import Card from '@material-ui/core/Card';

const Preloader = () => (<Card className={styles.wrap}>
  
  <img alt="Загрузка..." className={styles.preloader} src={load}/>
</Card>);

export default Preloader;