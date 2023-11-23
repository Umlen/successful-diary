import { type FunctionComponent } from 'react';
import gridIcon from '../../assets/icons/grid-icon.svg';
import singleIcon from '../../assets/icons/single-day-icon.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import TransparentButton from './TransparentButton';
import styles from '../../style/ui/controlsBar.module.scss';

interface ControlsBarProps {
  isGridView: boolean;
  gridViewToggler: () => void;
}

const ControlsBar: FunctionComponent<ControlsBarProps> = (props) => {
  const { isGridView, gridViewToggler } = props;

  return (
    <div className={styles.controlBar}>
      <TransparentButton onClick={gridViewToggler}>
        {isGridView ? (
          <img src={singleIcon} alt="" />
        ) : (
          <img src={gridIcon} alt="" />
        )}
      </TransparentButton>
      <TransparentButton>
        <img src={settingsIcon} alt="" />
      </TransparentButton>
    </div>
  );
};

export default ControlsBar;
