import { React, useState } from 'react';

const Counter = () => { 

  const [data, setData] = useState({
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  });

  const formatCount = () => data.count === 0 ? 'Zero' : data.count;

  const handleIncrement = () => {
    setData({
      ...data,
      count: data.count + 1
    })
  }

  return (
    <>
      <img src={data.imageUrl} alt="sunset" />
      <br />
      <span className="badge badge-primary m-2">{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default Counter;