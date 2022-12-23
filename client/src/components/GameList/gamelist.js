import React, { useState, useEffect } from 'react';
import './gamelist.css';
import randomItem from '../../assets/img/item/1043.png';

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

  function winOrLose(participants) {
    const currentPlayer = participants.find(player => player.puuid === puuid)
    if (currentPlayer.win) { return 'Victory' } 
    else { return 'Defeat' }
  }

  function gameDuration(start, end) {
    const gameLength = end - start
    const lengthInMinutes = Math.floor(gameLength / 1000 / 60)
    const lengthInSeconds = Math.floor(gameLength / 1000 % 60)

    return `${lengthInMinutes}m ${lengthInSeconds}s`
  }

  function findChampionIcon(participants) {
    const currentPlayer = participants.find(player => player.puuid === puuid)
    const playedChampion = currentPlayer.championName;
    
    return require(`../../assets/img/champion/${playedChampion}.png`)
  }

  function findChampionLevel(participants) {
    const currentPlayer = participants.find(player => player.puuid === puuid)

    return currentPlayer.champLevel
  }

  function getSummonerSpell(participants, num) {
    const currentPlayer = participants.find(player => player.puuid === puuid)
    const summonerSpellId = currentPlayer[`summoner${num}Id`]
    
    const summonerSpellName = returnSpellName(summonerSpellId)

    return require(`../../assets/img/spell/${summonerSpellName}.png`)
  }

  function returnSpellName(summonerSpellId) {
    let summonerName = ''
    
    switch (summonerSpellId) {
      case 1:
        summonerName = 'SummonerBoost'
        break
      case 3:
        summonerName = 'SummonerExhaust'
        break
      case 4:
        summonerName = 'SummonerFlash'
        break
      case 6:
        summonerName = 'SummonerHaste'
        break
      case 7:
        summonerName = 'SummonerHeal'
        break
      case 11:
        summonerName = 'SummonerSmite'
        break
      case 12:
        summonerName = 'SummonerTeleport'
        break
      case 13:
        summonerName = 'SummonerMana'
        break
      case 14:
        summonerName = 'SummonerDot'
        break
      case 21:
        summonerName = 'SummonerBarrier'
        break
      case 30:
        summonerName = 'SummonerPoroRecall'
        break
      case 31:
        summonerName = 'SummonerPoroThrow'
        break
      case 32:
      case 39:
        summonerName = 'SummonerSnowball'
        break
      default:
        summonerName = 'Summoner_UltBookPlaceholder'
        break
    }

    return summonerName
  }

  function getRunes(participants, num) {
    const currentPlayer = participants.find(player => player.puuid === puuid)
    const runes = currentPlayer.perks.styles[num]
    let runeId = ''

    if (num === 0) {
      runeId = runes.selections[num].perk
    } else {
      runeId = runes.style
    }

    let runeName = ''
    switch (runeId) {
      case 8000:
        runeName = '7201_Precision'
        break
      case 8100:
        runeName = '7200_Domination'
        break
      case 8200:
        runeName = '7202_Sorcery'
        break
      case 8300:
        runeName = '7203_Whimsy'
        break
      case 8400:
        runeName = '7204_Resolve'
        break
      case 8112:
        runeName = 'Domination/Electrocute/Electrocute'
        break
      case 8124:
        runeName = 'Domination/Predator/Predator'
        break
      case 8128:
        runeName = 'Domination/DarkHarvest/DarkHarvest'
        break
      case 9923:
        runeName = 'Domination/HailOfBlades/HailOfBlades'
        break
      case 8351:
        runeName = 'Inspiration/GlacialAugment/GlacialAugment'
        break
      case 8360:
        runeName = 'Inspiration/UnsealedSpellbook/UnsealedSpellbook'
        break
      case 8369:
        runeName = 'Inspiration/FirstStrike/FirstStrike'
        break
      case 8005:
        runeName = 'Precision/PressTheAttack/PressTheAttack'
        break
      case 8008:
        runeName = 'Precision/LethalTempo/LethalTempo'
        break
      case 8021:
        runeName = 'Precision/FleetFootwork/FleetFootwork'
        break
      case 8010:
        runeName = 'Precision/Conqueror/Conqueror'
        break
      case 8437:
        runeName = 'Resolve/GraspOfTheUndying/GraspOfTheUndying'
        break
      case 8439:
        runeName = 'Resolve/VeteranAftershock/VeteranAftershock'
        break
      case 8465:
        runeName = 'Resolve/Guardian/Guardian'
        break
      case 8214:
        runeName = 'Sorcery/SummonAery/SummonAery'
        break
      case 8229:
        runeName = 'Sorcery/ArcaneComet/ArcaneComet'
        break
      case 8230:
        runeName = 'Sorcery/PhaseRush/PhaseRush'
        break
      default:
        runeName = 'RunesIcon'
        break
    }
    
    return require(`../../assets/img/perk-images/Styles/${runeName}.png`)
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
              <div>{winOrLose(match.info.participants)}</div>
              <div>{gameDuration(match.info.gameStartTimestamp, match.info.gameEndTimestamp)}</div>
            </div>
            <div className="gamelist__champion-icon-spells-runes-container">
              <div className="gamelist__champion-icon">
                <img src={findChampionIcon(match.info.participants)} alt="Champion Icon" />
                <div className="gamelist__champion-icon-level">{findChampionLevel(match.info.participants)}</div>
              </div>
              <div className="gamelist__spells-runes">
                <div className="gamelist__spells-runes-wrapper">
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getSummonerSpell(match.info.participants, 1)} alt="Summoner Spell 1" />
                  </div>
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getSummonerSpell(match.info.participants, 2)} alt="Summoner Spell 2" />
                  </div>
                </div>
                <div className="gamelist__spells-runes-wrapper">
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getRunes(match.info.participants, 0)} alt="Rune 1" />
                  </div>
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getRunes(match.info.participants, 1)} alt="Rune 2" />
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
