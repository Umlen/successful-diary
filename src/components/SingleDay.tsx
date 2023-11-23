import { type FunctionComponent } from 'react';
import { getCurrentDate } from '../utils/utils';
import arrowUp from '../assets/icons/up-icon.svg';
import arrowDown from '../assets/icons/down-icon.svg';
import RoundButton from './ui/RoundButton';
import BaseButton from './ui/BaseButton';
import TextArea from './ui/TextArea';

const SingleDay: FunctionComponent = () => {
  const date = getCurrentDate();

  return (
    <div className="flexColumn gap2rem">
      <RoundButton>
        <img src={arrowUp} alt="" />
      </RoundButton>
      <div className="flexColumn">
        <h2>{date}</h2>
        <TextArea placeholder="Enter text..." />
        <BaseButton buttonText="Save" />
      </div>
      <RoundButton>
        <img src={arrowDown} alt="" />
      </RoundButton>
    </div>
  );
};

export default SingleDay;
