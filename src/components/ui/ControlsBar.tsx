import { type FunctionComponent } from 'react';
import gridIconDark from '../../assets/icons/grid-icon-dark.svg';
import singleIconDark from '../../assets/icons/single-day-icon-dark.svg';
import settingsIconDark from '../../assets/icons/settings-icon-dark.svg';
/* import gridIconLight from '../../assets/icons/grid-icon-light.svg';
import singleIconLight from '../../assets/icons/single-day-icon-light.svg';
import settingsIconLight from '../../assets/icons/settings-icon-light.svg'; */
import TransparentButton from './TransparentButton';
import styles from '../../style/ui/controlsBar.module.scss';

interface ControlsBarProps {
  isGridView: boolean;
  gridViewToggler: () => void;
}

const ControlsBar: FunctionComponent<ControlsBarProps> = (props) => {
  const { isGridView, gridViewToggler } = props;

  return (
    <div className={styles.controlsBar}>
      <TransparentButton onClick={gridViewToggler}>
        {isGridView ? (
          <img src={singleIconDark} alt="" />
        ) : (
          <img src={gridIconDark} alt="" />
        )}
      </TransparentButton>
      <TransparentButton>
        <img src={settingsIconDark} alt="" />
      </TransparentButton>
    </div>
  );
};

export default ControlsBar;
