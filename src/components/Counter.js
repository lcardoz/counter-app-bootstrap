import { React, useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <span>{count}</span>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </>
  )
}

export default Counter;