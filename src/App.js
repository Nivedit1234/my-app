//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import { About } from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({ msg: message, type: type });
  };
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-Light Mode';
    } else {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-Dark Mode';
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title='TextUtils'
        abouttext='About'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className='container my-3'>
        {/* <Routes> */}
        {/* <Route exact path='/about' element={<About />}></Route> */}
        {
          /* <Route
              exact
              path='/'
              element={ */
          <Textform heading='Enter the text to analyze below' mode={mode} />
          /* }
            ></Route> */
        }
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
