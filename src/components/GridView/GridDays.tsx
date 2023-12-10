import { useState, type FunctionComponent, useEffect } from 'react';
import testData from '../../data/testCalendar.json';
import { checkGridDaysFlag, getDaysFromCalendar } from '../../utils/utils';
import SquareButton from '../ui/Buttons/SquareButton';
import DayInGrid from './DayInGrid';
import styles from './gridDays.module.scss';

const GridDays: FunctionComponent = () => {
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(true);
  const [flag, setFlag] = useState(15);
  const [days, setDays] = useState(getDaysFromCalendar(testData.days, flag));

  useEffect(() => {
    const { checkedIsStart, checkedIsEnd } = checkGridDaysFlag(
      flag,
      testData.days.length,
    );

    setIsStart(checkedIsStart);
    setIsEnd(checkedIsEnd);
  }, [flag]);

  function increaseFlag(): void {
    const newFlag = flag + 15;
    setFlag(newFlag);
    setDays(getDaysFromCalendar(testData.days, newFlag));
  }

  function decreaseFlag(): void {
    const newFlag = flag - 15;
    setFlag(newFlag);
    setDays(getDaysFromCalendar(testData.days, newFlag));
  }

  return (
    <div className="flexRow">
      <SquareButton disabled={isStart} onClick={increaseFlag}>
        <p>&lt;</p>
      </SquareButton>
      <div className={styles.daysWrapper}>
        {days.map((day) => (
          <DayInGrid key={day._id} id={day._id} date={day.date} />
        ))}
      </div>
      <SquareButton disabled={isEnd} onClick={decreaseFlag}>
        <p>&gt;</p>
      </SquareButton>
    </div>
  );
};

export default GridDays;
