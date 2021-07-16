import React, { memo } from 'react';

import styles from './index.module.scss';

interface TimerProps {
  timerInSec: number;
  onDelete: () => void;
}
const Timer: React.FC<TimerProps> = (props) => {
  const { timerInSec, onDelete } = props;

  return (
    <div className={styles.container}>
      <h3>{timerInSec}</h3>
      <div>
        <button className={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default memo(Timer);
