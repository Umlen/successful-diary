import { type FunctionComponent } from 'react';
import testData from '../../data/testCalendar.json';
import { getDaysFromCalendar } from '../../utils/utils';
import SquareButton from '../ui/Buttons/SquareButton';
import DayInGrid from './DayInGrid';
import styles from './gridDays.module.scss';

const GridDays: FunctionComponent = () => {
  const days = getDaysFromCalendar(testData.days);

  return (
    <div className="flexRow">
      <SquareButton aria-label="previous 15 days">&lt;</SquareButton>
      <div className={styles.daysWrapper}>
        {days.map((day) => (
          <DayInGrid key={day._id} id={day._id} date={day.date} />
        ))}
      </div>
      <SquareButton aria-label="next 15 days">&gt;</SquareButton>
    </div>
  );
};

export default GridDays;
