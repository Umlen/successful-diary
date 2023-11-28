import { type FunctionComponent } from 'react';
import { getCurrentDate } from '../utils/utils';
import SquareButton from './ui/SquareButton';
import RectangleButton from './ui/RectangleButton';
import TextArea from './ui/TextArea';

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
