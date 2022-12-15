import React from 'react';
import './gamelist.css';
import randomItem from '../../assets/img/item/1043.png';
import championIcon from '../../assets/img/champion/Ahri.png';
import igniteIcon from '../../assets/img/spell/SummonerDot.png';
import flashIcon from '../../assets/img/spell/SummonerFlash.png';
import mainRune from '../../assets/img/perk-images/Styles/Domination/Electrocute/Electrocute.png';
import secondaryRune from '../../assets/img/perk-images/Styles/7202_Sorcery.png';

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
          <div className="gamelist__champion-icon">
            <img src={championIcon} alt="Champion Icon" />
            <div className="gamelist__champion-icon-level">14</div>
          </div>
          <div className="gamelist__spells-runes">
            <div className="gamelist__spells-runes-wrapper">
              <div className="gamelist__summoner-spell-rune-icon">
                <img src={igniteIcon} alt="Summoner Spell 1" />
              </div>
              <div className="gamelist__summoner-spell-rune-icon">
                <img src={flashIcon} alt="Summoner Spell 2" />
              </div>
            </div>
            <div className="gamelist__spells-runes-wrapper">
              <div className="gamelist__summoner-spell-rune-icon">
                <img src={mainRune} alt="Rune 1" />
              </div>
              <div className="gamelist__summoner-spell-rune-icon">
                <img src={secondaryRune} alt="Rune 2" />
              </div>
            </div>
          </div>
        </div>
        <div className="gamelist__kda-statistics">
          <div>10/<span className="red">0</span>/31</div>
          <div>3.50 KDA</div>
          <div>45 CS (2.3)</div>
        </div>
        <div className="gamelist__items-built">
          <div className="gamelist__built-item-container">
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 1" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 2" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 3" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 4" />
            </div>
          </div>
          <div className="gamelist__built-item-container">
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 5" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 6" />
            </div>
            <div className="gamelist__built-item">
              <img src={randomItem} alt="league item slot 7" />
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
