import React from 'react';
import styles from './Footer.module.css';



const Footer = ({ count }) => (
  <footer className={styles.wrap}>
    <div className={styles.content}>
      <div><span className={styles.items_count}>{count} items left</span></div>
      <div>
        <button className={styles.button}>All</button>
        <button className={styles.button}>Active</button>
        <button className={styles.button}>Completed</button>
      </div>

      <div className={styles.delete}>
        <button className={styles.btn_delete}>Clear completed</button>
      </div>
    </div>
  </footer>);

export default Footer;