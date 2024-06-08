import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light') ;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert ({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#092348'
      showAlert ('Dark mode has been Enabled','success')

    }
    else {
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert ('Light mode has been Enabled','success')
    }
  }

  return (
    <>
        <Router>
    <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3" >
    <Routes>
        <Route path="/" element= {<Textform heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} /> }/>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Textform heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />
        </Route> */}
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;