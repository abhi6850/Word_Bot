
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';






function App() {
  const [mode, setmode] = useState('light');
  
  
  const toggleMode = () => {
    if (mode ==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#0B1D51';
      document.body.style.color='white'; 
    
      
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    
  }
  
  return (
    <>
     <Navbar title="Word Bot" mode={mode} toggleMode={toggleMode}/>
     
     <div className="container my-3">
      <TextForm heading="Enter text to analyze" mode={mode}/>
     </div>
     

    </>
  );
}

export default App;
