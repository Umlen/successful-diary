import { type FunctionComponent, useState } from 'react';
import testData from '../../../data/testCalendar.json';
import { useTheme } from '../../../hooks/hooks';
import { editExistingDayText, getDayById } from '../../../utils/utils';
import RectangleButton from '../Buttons/RectangleButton';
import TextArea from '../Inputs/TextArea';
import SaveModal from './SaveModal';
import closeIconDark from '../../../assets/icons/close-icon-dark.svg';
import closeIconLight from '../../../assets/icons/close-icon-light.svg';
import styles from './modalWindow.module.scss';

interface DayModalProps {
  id: string;
  modalWindowToggler: () => void;
}

const DayModal: FunctionComponent<DayModalProps> = (props) => {
  const { id, modalWindowToggler } = props;
  const selectedDay = getDayById(testData.days, id);
  const [dayText, setDayText] = useState(selectedDay.text);
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [theme] = useTheme();

  function textAreaHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    const textAreaValue = e.target.value;

    setDayText(textAreaValue);
    setIsTextAreaEmpty(!textAreaValue.trim().length);
  }

  function saveButtonHandler(): void {
    editExistingDayText(id, dayText);
    setIsSaved(true);
  }

  function saveModalToggler(): void {
    setIsSaved(false);
    modalWindowToggler();
  }

  return (
    <div className={styles.blackout}>
      {isSaved && <SaveModal modalWindowToggler={saveModalToggler} />}
      <div className={`flexColumn ${styles.modalWindow}`}>
        <button
          className={styles.closeButton}
          onClick={modalWindowToggler}
          aria-label="close modal window button"
        >
          <img
            src={theme === 'light' ? closeIconLight : closeIconDark}
            className={styles.closeIcon}
            alt=""
          />
        </button>
        <h2>{selectedDay.date}</h2>
        <TextArea
          placeholder="Enter text..."
          value={dayText}
          onChange={textAreaHandler}
        />
        <RectangleButton
          disabled={isTextAreaEmpty}
          onClick={saveButtonHandler}
          aria-label="save button"
        >
          Save
        </RectangleButton>
      </div>
    </div>
  );
};

export default DayModal;
