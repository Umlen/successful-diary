import { type FunctionComponent } from 'react';
import arrowUp from '../assets/icons/up-icon.svg';
import arrowDown from '../assets/icons/down-icon.svg';
import RoundButton from './ui/RoundButton';

const GridDays: FunctionComponent = () => {
  return (
    <div className="flexColumn">
      <RoundButton>
        <img src={arrowUp} alt="" />
      </RoundButton>
      <div>Days grid here</div>
      <RoundButton>
        <img src={arrowDown} alt="" />
      </RoundButton>
    </div>
  );
};

export default GridDays;
