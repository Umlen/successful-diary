import { type FunctionComponent } from 'react';
import testData from '../../data/testCalendar.json';
import { useTheme } from '../../hooks/hooks';
import { getDayById } from '../../utils/utils';
import RectangleButton from './RectangleButton';
import TextArea from './TextArea';
import closeIconDark from '../../assets/icons/close-icon-dark.svg';
import closeIconLight from '../../assets/icons/close-icon-light.svg';
import styles from '../../style/ui/modalWindow.module.scss';

interface DayModalProps {
  id: string;
  modalWindowToggler: () => void;
}

const DayModal: FunctionComponent<DayModalProps> = (props) => {
  const { id, modalWindowToggler } = props;
  const [theme] = useTheme();
  const selectedDay = getDayById(testData.days, id);

  return (
    <div className={styles.blackout}>
      <div className={`flexColumn ${styles.modalWindow}`}>
        <img
          onClick={modalWindowToggler}
          src={theme === 'light' ? closeIconLight : closeIconDark}
          alt="close modal window button"
          className={styles.closeIcon}
        />
        <h2>{selectedDay.date}</h2>
        <TextArea defaultValue={selectedDay.text} />
        <RectangleButton>Save</RectangleButton>
      </div>
    </div>
  );
};

export default DayModal;
