import React from 'react';
import Header from './components/header/Header';
import styles from './App.module.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
