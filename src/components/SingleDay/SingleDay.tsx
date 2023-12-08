import { useState, type FunctionComponent } from 'react';
import { getCurrentDate, saveNewDay } from '../../utils/utils';
import SquareButton from '../ui/Buttons/SquareButton';
import RectangleButton from '../ui/Buttons/RectangleButton';
import TextArea from '../ui/Inputs/TextArea';

const SingleDay: FunctionComponent = () => {
  const [dayText, setDayText] = useState('');
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);
  const date = getCurrentDate();

  function textAreaHandler(textAreaValue: string): void {
    setDayText(textAreaValue);

    if (textAreaValue.trim().length) {
      setIsTextAreaEmpty(false);
    } else {
      setIsTextAreaEmpty(true);
    }
  }

  function saveButtonHandler(): void {
    saveNewDay(date, dayText);
    setDayText('');
    setIsTextAreaEmpty(true);
  }

  return (
    <div className="flexRow">
      <SquareButton>&lt;</SquareButton>
      <div className="flexColumn">
        <h2>{date}</h2>
        <TextArea
          placeholder="Enter text..."
          value={dayText}
          onChange={(e) => {
            textAreaHandler(e.target.value);
          }}
        />
        <RectangleButton disabled={isTextAreaEmpty} onClick={saveButtonHandler}>
          Save
        </RectangleButton>
      </div>
      <SquareButton>&gt;</SquareButton>
    </div>
  );
};

export default SingleDay;
