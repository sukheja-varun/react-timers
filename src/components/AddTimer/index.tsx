import React, { memo, useState } from 'react';

import styles from './index.module.scss';

interface AddTimerProps {
  onAddTimer: (timeInSec: number) => void;
  disabled?: boolean;
}
const AddTimer: React.FC<AddTimerProps> = (props) => {
  const { onAddTimer, disabled } = props;

  // state
  const [inputVal, setInputVal] = useState('');

  // functions
  const addTimer = () => {
    const val: number = parseInt(inputVal);
    if (isNaN(val) || val < 1) {
      alert('Invalid input');
      return
    }
    onAddTimer(val);
    setInputVal('');
  };

  return (
    <div className={styles.container}>
      <h2>Timer Value:</h2>
      <input
        disabled={disabled}
        type="number"
        min="1"
        placeholder="add time in seconds"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className={styles.addButton} onClick={addTimer}>
        Add Timer
      </button>
    </div>
  );
};
export default memo(AddTimer);
