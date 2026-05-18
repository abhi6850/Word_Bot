import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    const next = mode === 'light' ? 'dark' : 'light';
    setMode(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <>
      <Navbar title="WordBot" mode={mode} toggleMode={toggleMode} />
      <main className="wb-page">
        <div className="wb-hero">
          <div className="wb-hero-badge">✦ Text Utility</div>
          <h1>Transform your <span>text instantly</span></h1>
          <p>Uppercase, lowercase, clean spaces, copy, and more — all in one place, no fluff.</p>
        </div>
        <TextForm mode={mode} />
      </main>
      <footer className="wb-footer">
        Built with React &mdash; <a href="https://github.com" target="_blank" rel="noreferrer">View on GitHub</a>
      </footer>
    </>
  );
}

export default App;
