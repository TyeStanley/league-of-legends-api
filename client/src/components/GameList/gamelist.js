import React, { useState, useEffect } from 'react';
import './gamelist.css';
import randomItem from '../../assets/img/item/1043.png';
import championIcon from '../../assets/img/champion/Ahri.png';
import igniteIcon from '../../assets/img/spell/SummonerDot.png';
import flashIcon from '../../assets/img/spell/SummonerFlash.png';
import mainRune from '../../assets/img/perk-images/Styles/Domination/Electrocute/Electrocute.png';
import secondaryRune from '../../assets/img/perk-images/Styles/7202_Sorcery.png';

export default function Gamelist({ region, puuid }) {
  const [matches, setMatches] = useState([])
  console.log(matches)

  // gets 20 matches and sets it to matches
  useEffect(() => {
    let route = '';
    
    switch (region) {
      case 'na1':
      case 'br1':
      case 'la1':
      case 'la2':
        route = 'americas';
        break;
      case 'kr':
      case 'kp1':
        route = 'asia';
        break;
      case 'eun1':
      case 'euw1':
      case 'tr1':
      case 'ru':
        route = 'europe';
        break;
      default: break;
    }

    fetch(`http://localhost:3001/api/region/${route}/by-puuid/${puuid}`)
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => console.error(error))
  }, [puuid])

  // Gives the time on how long ago a game was played
  function gameEndedAgo(time) {
    let now = new Date().getTime()
    let difference = now - time

    let seconds = difference / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24
    
    if (seconds >= 0 && seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`
    } else if (minutes >= 1 && minutes < 60) {
      return `${Math.floor(minutes)} minutes ago`
    } else if (hours >= 1 && hours < 2) {
      return `an hour ago`
    } else if (hours >= 2 && hours < 24) {
      return `${Math.floor(hours)} hours ago`
    } else if (days >= 1 && days < 2) {
      return `a day ago`
    } else if (days >= 2) {
      return `${Math.floor(days)} days ago`
    }
  }
  
  return (
    <section className="gamelist">
      <div className="gamelist__title">GAMES PLAYED</div>
      {matches.map(match => {
        return (<>
          <div className="gamelist__container" key={match.info.gameEndTimeStamp}>
            <div className="gamelist__game-info">
              <div>{match.info.gameMode}</div>
              <div>{gameEndedAgo(match.info.gameEndTimestamp)}</div>
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
        </>)
      })}
    </section>
  )
}
