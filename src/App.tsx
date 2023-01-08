import { useState } from 'react';
import './App.css';
import { DismissableBlurb } from './DismissableBlurb';

export const removeElement = () => {
  const element = document.getElementById('blurb');
  element?.remove();
};
function App() {
  return (
    <DismissableBlurb removeElement={removeElement}>
      <Content />
    </DismissableBlurb>
  );
}

export const Content = () => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'left',
      }}
      id="blurb"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
        }}
      >
        <h3>Welcome to the new feed!</h3>
        <p id="remove" style={{ cursor: 'pointer' }} onClick={removeElement}>
          X
        </p>
      </div>
      <p>
        We'ew updating this to make it more interactive and useful. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Praesentium non officiis et
        expedita quam laudantium corporis vitae qui nobis incidunt?
      </p>
      <a href="https://example.com/feedback">Send feedback</a>
    </div>
  );
};

export default App;
