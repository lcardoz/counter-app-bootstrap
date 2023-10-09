import { React, useState } from 'react';

const Counter = ({counter, onDelete}) => { 
  
  const { id, value } = counter;

  const [data, setData] = useState({
    value: value,
    // imageUrl: 'https://picsum.photos/200',
    // tags: ['tag1', 'tag2', 'tag3'],
  });

  const formatValue = () => data.value === 0 ? 'Zero' : data.value;

  const handleIncrement = () => {
    setData({
      ...data,
      value: data.value + 1
    })
  }

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += (data.value === 0 ? "warning" : "primary");
    return classes;
  }

  // const renderTags = () => {
  //   if (data.tags.length === 0) return <p>There are no tags!</p>;
  //   return <ul>{data.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  return (
    <>
      <br />
      <h4>Counter #{id}</h4>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button 
        className="btn btn-secondary btn-sm" 
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button 
        onClick={() => onDelete(id)} 
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      {/* {data.tags.length === 0 && "Please create a new tag!"}
      {renderTags()} */}
    </>
  )
}

export default Counter;