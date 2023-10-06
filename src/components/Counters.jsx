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

  return (
    <div>
      {data.counters.map(counter => 
        <Counter key={counter.id} value={counter.value} id={counter.id} />)}
    </div>
  )
}

export default Counters;