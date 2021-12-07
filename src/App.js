import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const bhim = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark mode has enable", "warning");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has enable", "warning");
    }
  }
  return (
    <>

      <Navbar title="Mahakal" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} bhim={bhim} heading = "Enter the text to analyze" mode = {mode}/>
      </div>

      {/* <BhimChar /> */}
     
      
    </>
  );
}

export default App;
