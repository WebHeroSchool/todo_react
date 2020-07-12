import React from 'react';
import load from '../Img/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = () => (<div className={styles.wrap}>
  <img alt="Загрузка..." className={styles.preloader} src={load}/>
</div>);

export default Preloader;