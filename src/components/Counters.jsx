import React from 'react';
import Counter from './Counter';

const Counters = ({ counters, onReset, onIncrement, onDecrement, onDelete }) => {

  return (
    <>
      <button 
        onClick={onReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {counters.map(counter => 
        <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}/>)}
    </>
  )
}

export default Counters;