import { type FunctionComponent, useState } from 'react';
import GridDays from '@Components/GridView/GridDays';
import SingleDay from '@Components/SingleDay';
import ControlsBar from '@Ui/ControlsBar/ControlsBar';

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
