import React, { useState } from 'react'
import './nav.css'
import Navmenu from '../NavMenu/navmenu.js'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false);

  function handleBackground(e) {
    if (!e.target.matches('.background-navmenu')) return
    setOpen(false);
  }

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
    <div
      onClick={handleBackground}
      className="background-navmenu"
    >
      <Navmenu open={open} setOpen={setOpen} />
    </div>

    <nav className="desktop-nav">
      <h1 className="nav__header">League API</h1>
      <ul className="nav__link-list">
        <li className="nav__link">
          <button className="btn">
            <Link to="/">
              Home
            </Link>
          </button>
        </li>
        <li className="nav__link">
          <button className="btn" href="#">
            <Link to="/player">
              Player
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  </>)
}
