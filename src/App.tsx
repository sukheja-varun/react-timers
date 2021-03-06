import React, { useEffect, useRef, useState } from 'react';
import AddTimer from './components/AddTimer';

import styles from './App.module.scss';
import Timer from './components/Timer';

function App() {
  // variables/constants
  const MAX_TIMERS_ALLOWED = 10;

  // state
  const [timerList, setTimerList] = useState<number[]>([]);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Refs
  const $timerId = useRef<null | number>(null);

  // functions
  const onAddTimer = (timerInSec: number) => {
    setTimerList([...timerList, timerInSec]);
  };

  const onDelete = (indexToDelete: number) => {
    const newList = timerList.filter((_item, index) => index !== indexToDelete);
    setTimerList(newList);
  };

  const startTimer = () => {
    if ($timerId.current) return;
    console.log('setting interval');
    setCurrentTime(new Date());
    $timerId.current = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  };

  const clearTimer = () => {
    console.log('clearing interval');

    $timerId.current && clearInterval($timerId.current);
    $timerId.current = null;
  };

  // useEffects

  useEffect(() => {
    if (timerList.length) {
      startTimer();
    } else {
      clearTimer();
    }
  }, [timerList.length]);

  return (
    <div className={styles.app}>
      <header>
        <AddTimer
          onAddTimer={onAddTimer}
          disabled={timerList.length >= MAX_TIMERS_ALLOWED}
        />
      </header>
      <main>
        {timerList.map(
          (timer, index) =>
            currentTime &&
            timer && (
              <Timer
                key={`${index}${timer}`}
                timerInSec={timer}
                onDelete={() => onDelete(index)}
                currentDateTime={currentTime}
              />
            )
        )}
      </main>
    </div>
  );
}

export default App;
