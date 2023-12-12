import { type FunctionComponent } from 'react';
import RectangleButton from '../Buttons/RectangleButton';
import styles from './modalWindow.module.scss';

interface SaveModalProps {
  modalWindowToggler: () => void;
}

const SaveModal: FunctionComponent<SaveModalProps> = (props) => {
  const { modalWindowToggler } = props;

  return (
    <div className={styles.blackout}>
      <div className={`flexColumn ${styles.modalWindow}`}>
        <h2>Saved successfully</h2>
        <RectangleButton
          onClick={modalWindowToggler}
          aria-label="close modal window button"
        >
          Close
        </RectangleButton>
      </div>
    </div>
  );
};

export default SaveModal;
