import { type FunctionComponent } from 'react';
import RectangleButton from './RectangleButton';
import closeIconDark from '../../assets/icons/close-icon-dark.svg';
import closeIconLight from '../../assets/icons/close-icon-light.svg';
import styles from '../../style/ui/modalWindow.module.scss';

interface ModalWindowProps {
  theme: string;
  modalWindowToggler: () => void;
  changeTheme: () => void;
}

const ModalWindow: FunctionComponent<ModalWindowProps> = (props) => {
  const { theme, modalWindowToggler, changeTheme } = props;

  return (
    <div className={styles.blackout}>
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
        <div className="flexColumn">
          <RectangleButton>Log in</RectangleButton>
          <RectangleButton>Sign up</RectangleButton>
        </div>
        <p className={styles.themeText}>Theme</p>
        <RectangleButton onClick={changeTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </RectangleButton>
      </div>
    </div>
  );
};

export default ModalWindow;
