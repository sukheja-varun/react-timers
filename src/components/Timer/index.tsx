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
  const [pauseTimerInSec, setPauseTimerInSec] = useState<number | null>(null);

  // functions
  function getFutureDate(timeInSecToAdd: number = timerInSec) {
    return new Date(currentDateTime.getTime() + timeInSecToAdd * 1000);
  }

  const onReset = () => {
    setEndDateTime(getFutureDate());
    setPauseTimerInSec(null);
  };

  const onPause = () => {
    setPauseTimerInSec(timerToDisplay);
  };

  const onResume = () => {
    pauseTimerInSec && setEndDateTime(getFutureDate(pauseTimerInSec));
    setPauseTimerInSec(null);
  };

  // useEffect

  useEffect(() => {
    if (pauseTimerInSec) return;
    const diff = endDateTime.getTime() - currentDateTime.getTime();
    const diffInSec = Math.round(diff / 1000);
    const newTimer = diffInSec > 0 ? diffInSec : 0;

    setTimerToDisplay(newTimer);
  }, [currentDateTime, endDateTime, pauseTimerInSec]);

  return (
    <div className={styles.container}>
      <h1>{timerToDisplay}s</h1>
      <div>
        {!pauseTimerInSec && (
          <button
            className={styles.pauseButton}
            onClick={onPause}
            disabled={timerToDisplay === 0}
          >
            Pause
          </button>
        )}
        {pauseTimerInSec && (
          <button
            className={styles.resumeButton}
            onClick={onResume}
            disabled={timerToDisplay === 0}
          >
            Resume
          </button>
        )}
        <button
          className={styles.resetButton}
          onClick={onReset}
          disabled={timerToDisplay === 0}
        >
          Reset
        </button>
        <button className={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default memo(Timer);
