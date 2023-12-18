import { useState, type FunctionComponent, useEffect } from 'react';
import testData from '@Data/testCalendar.json';
import { getDaysFromCalendar, checkCalendarSeparator } from '@Utils/utils';
import SquareButton from '@Ui/Buttons/SquareButton';
import DayInGrid from './DayInGrid';
import styles from './gridDays.module.scss';

const GridDays: FunctionComponent = () => {
  const AMOUNT_OF_DISPLAYED_DAYS = 15;
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(true);
  const [calendarSeparator, setCalendarSeparator] = useState(
    AMOUNT_OF_DISPLAYED_DAYS,
  );
  const [days, setDays] = useState(
    getDaysFromCalendar(testData.days, calendarSeparator),
  );

  useEffect(() => {
    const { checkedIsStart, checkedIsEnd } = checkCalendarSeparator(
      calendarSeparator,
      testData.days.length,
    );

    setIsStart(checkedIsStart);
    setIsEnd(checkedIsEnd);
  }, [calendarSeparator]);

  function increaseCalendarSeparator(): void {
    const newCalendarSeparator = calendarSeparator + AMOUNT_OF_DISPLAYED_DAYS;
    setCalendarSeparator(newCalendarSeparator);
    setDays(getDaysFromCalendar(testData.days, newCalendarSeparator));
  }

  function decreaseCalendarSeparator(): void {
    const newCalendarSeparator = calendarSeparator - AMOUNT_OF_DISPLAYED_DAYS;
    setCalendarSeparator(newCalendarSeparator);
    setDays(getDaysFromCalendar(testData.days, newCalendarSeparator));
  }

  return (
    <div className="flexRow">
      <SquareButton
        disabled={isStart}
        onClick={increaseCalendarSeparator}
        aria-label="previous 15 days"
      >
        &lt;
      </SquareButton>
      <div className={styles.daysWrapper}>
        {days.map((day) => (
          <DayInGrid key={day._id} id={day._id} date={day.date} />
        ))}
      </div>
      <SquareButton
        disabled={isEnd}
        onClick={decreaseCalendarSeparator}
        aria-label="next 15 days"
      >
        &gt;
      </SquareButton>
    </div>
  );
};

export default GridDays;
