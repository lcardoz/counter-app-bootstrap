import React, {useState} from 'react';
import Counter from './Counter';

const Counters = () => {

  const [data, setData] = useState({
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  })

  const handleReset = () => {
    const counters = data.counters.map(c => {
      c.value = 0;
      return c;
    })
    setData({counters})
  }

  const handleIncrement = (counter) => {
    const counters = [...data.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    setData({counters});
  }

  const handleDelete = (counterId) => {
    const counters = data.counters.filter(c => c.id !== counterId)
    setData({counters})
  }

  return (
    <div>
      <button 
        onClick={handleReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {data.counters.map(counter => 
        <Counter key={counter.id} counter={counter} onIncrement={handleIncrement} onDelete={handleDelete}/>)}
    </div>
  )
}

export default Counters;