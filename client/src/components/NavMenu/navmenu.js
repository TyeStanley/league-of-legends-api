import React, { useEffect } from 'react'
import './navmenu.css'

export default function Navmenu({ open }) {

  useEffect(() => {
    const menu = document.querySelector('.nav-menu');
    const burgerLines = document.querySelectorAll('.burger-line');

    menu.classList.toggle('show');

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
