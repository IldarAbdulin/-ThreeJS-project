import React from 'react';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="app__footer">
        <Contact />
      </div>
    </div>
  );
}

export default App;
