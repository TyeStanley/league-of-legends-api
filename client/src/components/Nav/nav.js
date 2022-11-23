import React from 'react';
import './nav.css';

export default function nav() {
  return (
    <nav className="nav">
      <h1 className="nav__header">League API</h1>
      <ul className="nav__link-list">
        <li className="nav__link">
          <button className="btn" href="#">Link</button>
        </li>
        <li className="nav__link">
          <button className="btn" href="#">Link</button>
        </li>
        <li className="nav__link">
          <button className="btn" href="#">Link</button>
        </li>
        <li className="nav__link">
          <button className="btn" href="#">Link</button>
        </li>
      </ul>
    </nav>
  )
}
