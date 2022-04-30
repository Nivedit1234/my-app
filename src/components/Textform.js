import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('enter your text here');
  const handleUpCLick = () => {
    //console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowCLick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnClick = () => {
    setText('');
  };
  const handleOnChange = (event) => {
    // console.log('Onchange was clicked');
    setText(event.target.value);
  };
  const handleClearText = () => {
    setText('');
  };
  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            value={text}
            onClick={handleOnClick}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          ></textarea>
          <button className='btn btn-primary mx-1 my-2' onClick={handleUpCLick}>
            {' '}
            Convert to Uppercase
          </button>
          <button
            className='btn btn-primary mx-1 my-2'
            onClick={handleLowCLick}
          >
            {' '}
            Convert to Lowerrcase
          </button>
          <button
            className='btn btn-primary mx-1 my-2'
            onClick={handleClearText}
          >
            {' '}
            Clear all Text
          </button>
        </div>
      </div>
      <div
        className='container my-3'
        style={{
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
      >
        <h2
          style={{
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
        >
          Your text summary
        </h2>
        <p>
          {' '}
          <i>
            {text.split(' ').length} words {text.length} characters{' '}
          </i>
        </p>
        <p>
          <i>
            Time Required to read all the words is{' '}
            {text.split(' ').length * 0.08}
          </i>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : 'Enter something in the text box above to preview it'}
        </p>
      </div>
    </>
  );
}
