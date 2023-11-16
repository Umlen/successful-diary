import { type FunctionComponent } from 'react';

const SingleDay: FunctionComponent = () => {
  return (
    <div>
      <button>Prev</button>
      <div>
        <h2>Date</h2>
        <textarea placeholder="Enter text..." />
        <button>Save</button>
      </div>
      <button>Next</button>
    </div>
  );
};

export default SingleDay;
