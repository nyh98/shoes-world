import React from 'react';
import Header from './components/header/Header';
import styles from './App.module.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
