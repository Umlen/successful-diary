import { type FunctionComponent, useState } from 'react';
import GridDays from './GridDays';
import SingleDay from './SingleDay';

const App: FunctionComponent = () => {
  const [isGridView, setIsGridView] = useState(false);

  function gridViewOn(): void {
    setIsGridView(true);
  }

  function gridViewOff(): void {
    setIsGridView(false);
  }

  return (
    <>
      <div className="controlBar">
        <div>
          <button onClick={gridViewOff}>Single day view</button>
          <button onClick={gridViewOn}>Grid days view</button>
        </div>
        <button>Settings</button>
      </div>
      {isGridView ? <GridDays /> : <SingleDay />}
    </>
  );
};

export default App;
