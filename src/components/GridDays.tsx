import { type FunctionComponent } from 'react';
import testData from '../data/testCalendar.json';
import { getDaysFromCalendar } from '../utils/utils';
import arrowUp from '../assets/icons/up-icon.svg';
import arrowDown from '../assets/icons/down-icon.svg';
import RoundButton from './ui/RoundButton';
import styles from '../style/gridDays.module.scss';
import DayInGrid from './DayInGrid';

const GridDays: FunctionComponent = () => {
  const days = getDaysFromCalendar(testData.days);

  return (
    <div className="flexColumn gap2rem">
      <RoundButton>
        <img src={arrowUp} alt="" />
      </RoundButton>
      <div className={styles.daysWrapper}>
        {days.map((day) => (
          <DayInGrid key={day._id} date={day.date} />
        ))}
      </div>
      <RoundButton>
        <img src={arrowDown} alt="" />
      </RoundButton>
    </div>
  );
};

export default GridDays;
