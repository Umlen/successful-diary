import { type FunctionComponent } from 'react';
import styles from './gridDays.module.scss';

interface DayInGridProps {
  date: string;
}

const DayInGrid: FunctionComponent<DayInGridProps> = ({ date }) => {
  return (
    <div className={styles.dayBlock}>
      <p>{date}</p>
    </div>
  );
};

export default DayInGrid;
