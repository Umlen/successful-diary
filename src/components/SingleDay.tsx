import { type FunctionComponent } from 'react';
import { getCurrentDate } from '../utils/utils';
import SquareButton from './ui/Buttons/SquareButton';
import RectangleButton from './ui/Buttons/RectangleButton';
import TextArea from './ui/Inputs/TextArea';

const SingleDay: FunctionComponent = () => {
  const date = getCurrentDate();

  return (
    <div className="flexRow">
      <SquareButton>&lt;</SquareButton>
      <div className="flexColumn">
        <h2>{date}</h2>
        <TextArea placeholder="Enter text..." />
        <RectangleButton>Save</RectangleButton>
      </div>
      <SquareButton>&gt;</SquareButton>
    </div>
  );
};

export default SingleDay;
