import { type FunctionComponent } from 'react';
import closeIconDark from '../../assets/icons/close-icon-dark.svg';
/* import closeIconLight from '../../assets/icons/close-icon-light.svg'; */
import RectangleButton from './RectangleButton';
import styles from '../../style/ui/modalWindow.module.scss';

interface ModalWindowProps {
  modalWindowToggler: () => void;
}

const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  modalWindowToggler,
}) => {
  return (
    <div className={styles.blackout}>
      <div className={`flexColumn ${styles.modalWindow}`}>
        <img
          onClick={modalWindowToggler}
          src={closeIconDark}
          alt=""
          className={styles.closeIcon}
        />
        <div className="flexColumn">
          <RectangleButton>Log in</RectangleButton>
          <RectangleButton>Sign up</RectangleButton>
        </div>
        <p className={styles.themeText}>Theme</p>
        <div className="flexRow">
          <RectangleButton>Dark</RectangleButton>
          <RectangleButton>Light</RectangleButton>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
