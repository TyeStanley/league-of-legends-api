import React, { useEffect } from 'react'
import './navmenu.css'
import { Link } from 'react-router-dom'

export default function Navmenu({ open, setOpen }) {

  useEffect(() => {
    const menu = document.querySelector('.nav-menu');
    const burgerLines = document.querySelectorAll('.burger-line');
    const background = document.querySelector('.background-navmenu');
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    menu.classList.toggle('show');
    background.classList.toggle('show');

    if (open !== false) {
      html.style.overflowY = 'hidden';
      body.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = 'scroll';
      body.style.overflowY = 'scroll';
    }
    
    for (let i = 0; i < burgerLines.length; i++) {
      burgerLines[i].classList.toggle(`burger-line${i}`);
    }
  }, [open])

  function setToClose(e) {
    if (!e.target.matches('.aLink')) return
    setOpen(false)
  }

  return (
    <div className="nav-menu" onClick={setToClose}>
      <Link className="aLink" to="/">
        Home
      </Link>
      <Link className="aLink" to="/player">
        Player
      </Link>
    </div>
  )
}
