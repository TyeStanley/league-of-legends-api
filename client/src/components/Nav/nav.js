import React, { useState } from 'react'
import './nav.css'
import Navmenu from '../NavMenu/navmenu.js'

export default function Nav() {
  const [open, setOpen] = useState(false);


  return (<>

    <nav className="mobile-nav">
      <h1 className="nav__header">League API</h1>
      <div
        open={open}
        onClick={() => setOpen(!open)}
        className="burger-design"
      >
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>
    </nav>
    <div>
      <Navmenu open={open} />
    </div>


    <nav className="desktop-nav">
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
  </>)
}
