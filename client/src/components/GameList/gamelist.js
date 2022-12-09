import React from 'react';
import './gamelist.css';
import randomItem from '../../assets/img/item/1043.png';

export default function Gamelist() {
  return (
    <section className="gamelist">
      <div className="gamelist__title">GAMES PLAYED</div>
      <div className="gamelist__container">
        <div className="gamelist__game-info">
          <div>Normals</div>
          <div>11 Hours Ago</div>
          <div>Victory</div>
          <div>47:58</div>
        </div>
        <div className="gamelist__champion-icon-spells-runes-container">
          <div className="gamelist__champion-icon-wrapper">
            <div className="gamelist__champion-icon">
              img tag
              <div>14</div>
            </div>
          </div>
          <div className="gamelist__spells-runes">
            <div>img tag</div>
            <div>img tag</div>
            <div>img tag</div>
            <div>img tag</div>
          </div>
        </div>
        <div className="gamelist__kda-statistics">
          <div>10/0/31</div>
          <div>3.50 KDA</div>
          <div>45 CS (2.3)</div>
        </div>
        <div className="gamelist__items-built">
          <div className="gamelist__built-item-container">
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
          </div>
          <div className="gamelist__built-item-container">
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item" />
            </div>
          </div>
        </div>
        {/* Non Mobile */}
        {/* <div className="gamelist__player-name-list">
          <div className="gamelist_team-1">
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
          </div>
          <div className="gamelist_team-2">
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
            <div className="gamelist_player">
              <div>icon</div>
              <div>Player Name</div>
            </div>
          </div>
        </div> */}
        <div className="gamelist_tab"></div>
      </div>
    </section>
  )
}
