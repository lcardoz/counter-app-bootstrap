import { React } from 'react';

const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => { 

  const { id, value } = counter;

  const formatValue = () => value === 0 ? 'Zero' : value;

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += (value === 0 ? "warning" : "primary");
    return classes;
  }

  // const renderTags = () => {
  //   if (data.tags.length === 0) return <p>There are no tags!</p>;
  //   return <ul>{data.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  return (
    <div className="row">
      <div className='col-1'>
        <span className={getBadgeClasses()}>{formatValue()}</span>
      </div>
      <div className='col'>
        <button 
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm" 
          >
          +
        </button>
        <button 
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2" 
          disabled={counter.value === 0 ? 'disabled' : ''}
          >
          -
        </button>
        <button 
          onClick={() => onDelete(id)} 
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
      {/* {data.tags.length === 0 && "Please create a new tag!"}
      {renderTags()} */}
    </div>
  )
}

export default Counter;