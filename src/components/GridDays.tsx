import { type FunctionComponent } from 'react';
import testData from '../data/testCalendar.json';
import { getDaysFromCalendar } from '../utils/utils';
import SquareButton from './ui/SquareButton';
import DayInGrid from './DayInGrid';
import styles from '../style/gridDays.module.scss';

const GridDays: FunctionComponent = () => {
  const days = getDaysFromCalendar(testData.days);

  return (
    <div className="flexRow">
      <SquareButton>
        <p>&lt;</p>
      </SquareButton>
      <div className={styles.daysWrapper}>
        {days.map((day) => (
          <DayInGrid key={day._id} id={day._id} date={day.date} />
        ))}
      </div>
      <SquareButton>
        <p>&gt;</p>
      </SquareButton>
    </div>
  );
};

export default GridDays;
