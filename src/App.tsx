import React, { useState } from 'react';
import AddTimer from './components/AddTimer';

import styles from './App.module.scss';
import Timer from './components/Timer';

function App() {
  // state
  const [timerList, setTimerList] = useState<number[]>([]);

  // functions
  const onAddTimer = (timerInSec: number) => {
    setTimerList([...timerList, timerInSec]);
  };

  const onDelete = (indexToDelete: number) => {
    const newList = timerList.filter((item, index) => index !== indexToDelete);
    setTimerList(newList);
  };

  return (
    <div className={styles.app}>
      <header>
        <AddTimer onAddTimer={onAddTimer} />
      </header>
      <main>
        {timerList.map((timer, index) => (
          <Timer
            key={index}
            timerInSec={timer}
            onDelete={() => onDelete(index)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
