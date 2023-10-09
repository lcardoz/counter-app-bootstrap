import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import './App.css';

function App() {

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
    <>
      <Navbar 
        totalCounters={data.counters.filter(c => c.value > 0).length} 
      />
      <main className="container">
        <Counters 
          counters={data.counters} 
          onReset={handleReset} 
          onIncrement={handleIncrement} 
          onDelete={handleDelete} 
        />
      </main>
    </>
  )
}

export default App;
