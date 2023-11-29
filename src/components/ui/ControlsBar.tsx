import { useState, type FunctionComponent } from 'react';
import gridIconDark from '../../assets/icons/grid-icon-dark.svg';
import singleIconDark from '../../assets/icons/single-day-icon-dark.svg';
import settingsIconDark from '../../assets/icons/settings-icon-dark.svg';
/* import gridIconLight from '../../assets/icons/grid-icon-light.svg';
import singleIconLight from '../../assets/icons/single-day-icon-light.svg';
import settingsIconLight from '../../assets/icons/settings-icon-light.svg'; */
import TransparentButton from './TransparentButton';
import styles from '../../style/ui/controlsBar.module.scss';
import ModalWindow from './ModalWindow';

interface ControlsBarProps {
  isGridView: boolean;
  gridViewToggler: () => void;
}

const ControlsBar: FunctionComponent<ControlsBarProps> = (props) => {
  const { isGridView, gridViewToggler } = props;
  const [isModalShown, setIsModalShown] = useState(false);

  function modalWindowToggler(): void {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  return (
    <div className={styles.controlsBar}>
      {isModalShown && <ModalWindow modalWindowToggler={modalWindowToggler} />}
      <TransparentButton
        onClick={gridViewToggler}
        aria-label="change view button"
      >
        {isGridView ? (
          <img src={singleIconDark} alt="" />
        ) : (
          <img src={gridIconDark} alt="" />
        )}
      </TransparentButton>
      <TransparentButton onClick={modalWindowToggler}>
        <img src={settingsIconDark} alt="" />
      </TransparentButton>
    </div>
  );
};

export default ControlsBar;
