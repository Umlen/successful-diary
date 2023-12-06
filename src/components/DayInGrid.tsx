import { type FunctionComponent, useState } from 'react';
import styles from '../style/gridDays.module.scss';
import DayModal from './ui/DayModal';

interface DayInGridProps {
  id: string;
  date: string;
}

const DayInGrid: FunctionComponent<DayInGridProps> = ({ id, date }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler(): void {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  return (
    <>
      {isModalShown && (
        <DayModal id={id} modalWindowToggler={modalWindowToggler} />
      )}
      <div className={styles.dayBlock} onClick={modalWindowToggler}>
        <p>{date}</p>
      </div>
    </>
  );
};

export default DayInGrid;
