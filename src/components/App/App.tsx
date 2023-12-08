import { type FunctionComponent, useState } from 'react';
import GridDays from '../GridView/GridDays';
import SingleDay from '../SingleDay/SingleDay';
import ControlsBar from '../ui/ControlsBar/ControlsBar';

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
