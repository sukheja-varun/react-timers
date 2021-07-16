import React from 'react';
import styles from './App.module.scss';
import AddTimer from './components/AddTimer';

function App() {
  const onAddTimer = (timerInSec: number) => {
    console.log('timer to add', timerInSec);
  };

  return (
    <div className={styles.app}>
      <header>
        <AddTimer onAddTimer={onAddTimer} />
      </header>
      <main></main>
    </div>
  );
}

export default App;
