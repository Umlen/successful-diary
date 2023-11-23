import { type FunctionComponent, useState } from 'react';
import GridDays from './GridDays';
import SingleDay from './SingleDay';
import ControlsBar from './ui/ControlsBar';

const App: FunctionComponent = () => {
  const [isGridView, setIsGridView] = useState(false);

  function gridViewToggler(): void {
    setIsGridView((prevViewState) => !prevViewState);
  }

  return (
    <>
      <ControlsBar isGridView={isGridView} gridViewToggler={gridViewToggler} />
      {isGridView ? <GridDays /> : <SingleDay />}
    </>
  );
};

export default App;
