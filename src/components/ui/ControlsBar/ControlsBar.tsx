import { useState, type FunctionComponent } from 'react';
import { useTheme } from '@Hooks/hooks';
import TransparentButton from '../Buttons/TransparentButton';
import ModalWindow from '../Modals/ModalWindow';

import gridIconDark from '@Assets/icons/grid-icon-dark.svg';
import singleIconDark from '@Assets/icons/single-day-icon-dark.svg';
import settingsIconDark from '@Assets/icons/settings-icon-dark.svg';
import gridIconLight from '@Assets/icons/grid-icon-light.svg';
import singleIconLight from '@Assets/icons/single-day-icon-light.svg';
import settingsIconLight from '@Assets/icons/settings-icon-light.svg';

import styles from './controlsBar.module.scss';

interface ControlsBarProps {
  isGridView: boolean;
  gridViewToggler: () => void;
}

const ControlsBar: FunctionComponent<ControlsBarProps> = (props) => {
  const { isGridView, gridViewToggler } = props;
  const [isModalShown, setIsModalShown] = useState(false);
  const [theme, changeTheme] = useTheme();

  function modalWindowToggler(): void {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  return (
    <div className={styles.controlsBar}>
      {isModalShown && (
        <ModalWindow
          theme={theme}
          modalWindowToggler={modalWindowToggler}
          changeTheme={changeTheme}
        />
      )}
      <TransparentButton
        onClick={gridViewToggler}
        aria-label="change view button"
      >
        {isGridView ? (
          <img
            src={theme === 'light' ? singleIconLight : singleIconDark}
            alt=""
          />
        ) : (
          <img src={theme === 'light' ? gridIconLight : gridIconDark} alt="" />
        )}
      </TransparentButton>
      <TransparentButton
        onClick={modalWindowToggler}
        aria-label="settings button"
      >
        <img
          src={theme === 'light' ? settingsIconLight : settingsIconDark}
          alt=""
        />
      </TransparentButton>
    </div>
  );
};

export default ControlsBar;
