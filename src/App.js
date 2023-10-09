import React from 'react';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </>
  )
}

export default App;
