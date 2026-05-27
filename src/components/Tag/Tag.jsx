import React from 'react';
import './Tag.scss';

function Tag({ text = "Women in STEM" }) {
  return (
    <div className="tag">
      <span className="tag__circle"></span>
      <span className="tag__text">{text}</span>
    </div>
  );
}

export default Tag;