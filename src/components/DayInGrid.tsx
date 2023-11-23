import { type FunctionComponent } from 'react';
import styles from '../style/gridDays.module.scss';

interface DayInGridProps {
  date: string;
}

const DayInGrid: FunctionComponent<DayInGridProps> = ({ date }) => {
  return (
    <div className={styles.dayBlock}>
      <h3>{date}</h3>
    </div>
  );
};

export default DayInGrid;
