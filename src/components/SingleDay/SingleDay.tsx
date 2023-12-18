import type React from 'react';
import { useState, type FunctionComponent, useEffect } from 'react';
import testCalendar from '@Data/testCalendar.json';
import {
  getCurrentDate,
  getDayByDate,
  saveNewDay,
  editExistingDayText,
} from '@Utils/utils';
import SquareButton from '@Ui/Buttons/SquareButton';
import RectangleButton from '@Ui/Buttons/RectangleButton';
import TextArea from '@Ui/Inputs/TextArea';
import SaveModal from '@Ui/Modals/SaveModal';

const SingleDay: FunctionComponent = () => {
  const [dayText, setDayText] = useState('');
  const [isTextAreaEmpty, setIsTextAreaEmpty] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const date = getCurrentDate();

  useEffect(() => {
    const existingDayWithDate = getDayByDate(testCalendar.days, date);

    if (existingDayWithDate) {
      setDayText(existingDayWithDate.text);
      setIsTextAreaEmpty(false);
    }
  }, [date]);

  function textAreaHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    const textAreaValue = e.target.value;

    setDayText(textAreaValue);
    setIsTextAreaEmpty(!textAreaValue.trim().length);
  }

  function saveButtonHandler(): void {
    const existingDayWithDate = getDayByDate(testCalendar.days, date);

    if (existingDayWithDate) {
      editExistingDayText(existingDayWithDate._id, dayText);
    } else {
      saveNewDay(date, dayText);
    }
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
