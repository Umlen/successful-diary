import type React from 'react';
import { useState, type FunctionComponent } from 'react';
import { getCurrentDate, saveNewDay } from '../../utils/utils';
import SquareButton from '../ui/Buttons/SquareButton';
import RectangleButton from '../ui/Buttons/RectangleButton';
import TextArea from '../ui/Inputs/TextArea';
import SaveModal from '../ui/Modals/SaveModal';

const SingleDay: FunctionComponent = () => {
  const [dayText, setDayText] = useState('');
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const date = getCurrentDate();

  function textAreaHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    const textAreaValue = e.target.value;

    setDayText(textAreaValue);
    setIsTextAreaEmpty(!textAreaValue.trim().length);
  }

  function saveButtonHandler(): void {
    saveNewDay(date, dayText);
    setDayText('');
    setIsTextAreaEmpty(true);
    setIsSaved(true);
  }

  function saveModalToggler(): void {
    setIsSaved(false);
  }

  return (
    <div className="flexRow">
      {isSaved && <SaveModal modalWindowToggler={saveModalToggler} />}
      <SquareButton aria-label="previous day">&lt;</SquareButton>
      <div className="flexColumn">
        <h2>{date}</h2>
        <TextArea
          placeholder="Enter text..."
          value={dayText}
          onChange={textAreaHandler}
        />
        <RectangleButton disabled={isTextAreaEmpty} onClick={saveButtonHandler}>
          Save
        </RectangleButton>
      </div>
      <SquareButton aria-label="next day">&gt;</SquareButton>
    </div>
  );
};

export default SingleDay;
