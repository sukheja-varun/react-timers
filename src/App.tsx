import React, { useState } from 'react';
import AddTimer from './components/AddTimer';

import styles from './App.module.scss';

function App() {
  // state
  const [timerList, setTimerList] = useState<number[]>([]);

  // functions
  const onAddTimer = (timerInSec: number) => {
    setTimerList([...timerList, timerInSec]);
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
