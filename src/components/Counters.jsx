import React from 'react';
import Counter from './Counter';

const Counters = ({ counters, onReset, onIncrement, onDelete }) => {

  return (
    <div>
      <button 
        onClick={onReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {counters.map(counter => 
        <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDelete={onDelete}/>)}
    </div>
  )
}

export default Counters;