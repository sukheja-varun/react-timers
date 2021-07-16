import React, { memo, useEffect, useState } from 'react';

import styles from './index.module.scss';

interface TimerProps {
  timerInSec: number;
  currentDateTime: Date;
  onDelete: () => void;
}
const Timer: React.FC<TimerProps> = (props) => {
  const { timerInSec, onDelete, currentDateTime } = props;

  //   state
  const [endDateTime, setEndDateTime] = useState(getFutureDate());
  const [timerToDisplay, setTimerToDisplay] = useState(timerInSec);

  // functions
  function getFutureDate(timeInSecToAdd: number = timerInSec + 1) {
    return new Date(currentDateTime.getTime() + timeInSecToAdd * 1000);
  }

  // useEffect

  useEffect(() => {
    const diff = endDateTime.getTime() - currentDateTime.getTime();
    const diffInSec = Math.round(diff / 1000);
    const newTimer = diffInSec > 0 ? diffInSec : 0;

    setTimerToDisplay(newTimer);
  }, [currentDateTime, endDateTime]);

  return (
    <div className={styles.container}>
      <h3>{timerToDisplay}</h3>
      <div>
        <button className={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default memo(Timer);
