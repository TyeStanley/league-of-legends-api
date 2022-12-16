import React, { useEffect } from 'react'
import './navmenu.css'

export default function Navmenu({ open }) {

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

  return (
    <div className="nav-menu">
      <a href="/">
        Home
      </a>
      <a href="/player">
        Player
      </a>
      <a href="/champions">
        Champions
      </a>
    </div>
  )
}
