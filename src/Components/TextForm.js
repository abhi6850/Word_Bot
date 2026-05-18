import { useState, useCallback } from 'react';

export default function TextForm() {
  const [text, setText] = useState('');
  const [toast, setToast] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToast(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2200);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readTime = (0.008 * wordCount).toFixed(2);
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  const actions = [
    {
      label: '↑ Uppercase',
      style: 'primary',
      fn: () => { setText(text.toUpperCase()); showToast('Converted to uppercase'); },
    },
    {
      label: '↓ Lowercase',
      style: 'primary',
      fn: () => { setText(text.toLowerCase()); showToast('Converted to lowercase'); },
    },
    {
      label: '✦ Title Case',
      style: 'ghost',
      fn: () => {
        setText(text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()));
        showToast('Title case applied');
      },
    },
    {
      label: '⟳ Reverse',
      style: 'ghost',
      fn: () => { setText(text.split(' ').reverse().join(' ')); showToast('Words reversed'); },
    },
    {
      label: '⌥ Remove Spaces',
      style: 'ghost',
      fn: () => { setText(text.trim().replace(/\s+/g, ' ')); showToast('Extra spaces removed'); },
    },
    {
      label: '⎘ Copy',
      style: 'ghost',
      fn: () => { navigator.clipboard.writeText(text); showToast('Copied to clipboard!'); },
    },
    {
      label: '✕ Clear',
      style: 'danger',
      fn: () => { setText(''); showToast('Text cleared'); },
    },
  ];

  return (
    <>
      {/* Input card */}
      <div className="wb-card">
        <div className="wb-card-title">Your Text</div>
        <textarea
          className="wb-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste or type your text here…"
          rows={8}
        />
        <div className="wb-char-count">{charCount} characters</div>

        <div className="wb-actions">
          {actions.map(({ label, style, fn }) => (
            <button
              key={label}
              className={`wb-btn wb-btn-${style}`}
              onClick={fn}
              disabled={text.length === 0 && label !== '✕ Clear'}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="wb-stats">
          <div className="wb-stat">
            <span className="wb-stat-label">Words</span>
            <span className="wb-stat-value">{wordCount}</span>
          </div>
          <div className="wb-stat">
            <span className="wb-stat-label">Characters</span>
            <span className="wb-stat-value">{charCount}</span>
          </div>
          <div className="wb-stat">
            <span className="wb-stat-label">Sentences</span>
            <span className="wb-stat-value">{sentenceCount}</span>
          </div>
          <div className="wb-stat">
            <span className="wb-stat-label">Read Time</span>
            <span className="wb-stat-value">{readTime}</span>
            <span className="wb-stat-sub">minutes</span>
          </div>
        </div>
      </div>

      {/* Preview card */}
      <div className="wb-card" style={{ animationDelay: '0.2s' }}>
        <div className="wb-preview-label">Preview</div>
        <div className="wb-preview-text">
          {text.length > 0
            ? text
            : <span className="wb-preview-empty">Your text will appear here…</span>
          }
        </div>
      </div>

      {/* Toast */}
      <div className={`wb-toast${toastVisible ? ' show' : ''}`}>{toast}</div>
    </>
  );
}
