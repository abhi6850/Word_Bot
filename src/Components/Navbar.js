import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title, mode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="wb-navbar">
      <a className="wb-brand" href="/">
        <span className="wb-brand-dot" />
        {title}
      </a>

      {/* Mobile hamburger */}
      <button
        className="wb-hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`wb-nav-links${menuOpen ? ' open' : ''}`}>
        <a className="wb-nav-link" href="/">Home</a>
        <a className="wb-nav-link" href="#about">About</a>
        <button className="wb-theme-toggle" onClick={toggleMode}>
          <span className="wb-toggle-icon">{mode === 'light' ? '🌙' : '☀️'}</span>
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
