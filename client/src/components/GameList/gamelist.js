import React, { useState, useEffect } from 'react';
import './gamelist.css';

export default function Gamelist({ currentInitInfo, puuid }) {
  const [matches, setMatches] = useState([])

  // gets 20 matches and sets it to matches
  useEffect(() => {
    let route = '';
    
    switch (currentInitInfo.region) {
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
  }, [puuid, currentInitInfo])

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

  function winOrLose(player) {
    if (player.win === true) { return 'Victory' } 
    else { return 'Defeat' }
  }

  function gameDuration(start, end) {
    const gameLength = end - start
    const lengthInMinutes = Math.floor(gameLength / 1000 / 60)
    const lengthInSeconds = Math.floor(gameLength / 1000 % 60)

    return `${lengthInMinutes}m ${lengthInSeconds}s`
  }

  function findChampionIcon(player) {
    return require(`../../assets/img/champion/${player.championName}.png`)
  }

  function findChampionLevel(player) {
    return player.champLevel
  }

  function getSummonerSpell(player, num) {
    const summonerSpellId = player[`summoner${num}Id`]
    
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

  function getRunes(player, num) {
    const runes = player.perks.styles[num]
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
        runeName = 'Precision/LethalTempo/LethalTempoTemp'
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

  function getKda(player, kda) {
    if (kda === 'kills') {
      return player.kills
    } else if (kda === 'deaths') {
      return player.deaths
    } else if (kda === 'assists') {
      return player.assists
    }
  }

  function getAverageKda(player) {
    const kills = player.kills
    const deaths = player.deaths
    const assists = player.assists

    if (deaths === 0) return 'Perfect'

    const averageKDA = ((kills + assists) / deaths).toFixed(2)
    
    return averageKDA
  }

  function getCreepScore(gameInfo) {
    const currentPlayer = gameInfo.participants.find(player => player.puuid === puuid)

    const gameLengthMinutes = (gameInfo.gameEndTimestamp - gameInfo.gameStartTimestamp) / 1000 / 60

    const minionKills = currentPlayer.totalMinionsKilled
    const monsterKills = currentPlayer.neutralMinionsKilled

    const creepScore = minionKills + monsterKills

    const averagePerMinute = creepScore / gameLengthMinutes

    const rounded = Math.round(averagePerMinute * 10) / 10 

    return `CS ${creepScore} (${rounded})`
  }

  function getItems(player, num) { 
    let item = player[`item${num}`]

    if (item === 0) item = 7050

    return require(`../../assets/img/item/${item}.png`)
  }

  return (
    <section className="gamelist">
      <div className="gamelist__title">GAMES PLAYED</div>
      {matches.map(match => {

        const player = match.info.participants.find(player => player.puuid === puuid)
        if (!player) return null
        
        return (<>
          <div className="gamelist__container" key={match.info.gameEndTimeStamp}>
            <div className="gamelist__game-info">
              <div>{match.info.gameMode}</div>
              <div>{gameEndedAgo(match.info.gameEndTimestamp)}</div>
              <div>{winOrLose(player)}</div>
              <div>{gameDuration(match.info.gameStartTimestamp, match.info.gameEndTimestamp)}</div>
            </div>
            <div className="gamelist__champion-icon-spells-runes-container">
              <div className="gamelist__champion-icon">
                <img src={findChampionIcon(player)} alt="Champion Icon" />
                <div className="gamelist__champion-icon-level">{findChampionLevel(match.info.participants)}</div>
              </div>
              <div className="gamelist__spells-runes">
                <div className="gamelist__spells-runes-wrapper">
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getSummonerSpell(player, 1)} alt="Summoner Spell 1" />
                  </div>
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getSummonerSpell(player, 2)} alt="Summoner Spell 2" />
                  </div>
                </div>
                <div className="gamelist__spells-runes-wrapper">
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getRunes(player, 0)} alt="Rune 1" />
                  </div>
                  <div className="gamelist__summoner-spell-rune-icon">
                    <img src={getRunes(player, 1)} alt="Rune 2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="gamelist__kda-statistics">
              <div>
                {getKda(player, 'kills')}
                /
                <span className="red">
                  {getKda(player, 'deaths')}
                </span>
                /
                {getKda(player, 'assists')}
              </div>
              <div>{getAverageKda(player)} KDA</div>
              <div>{getCreepScore(match.info)}</div>
            </div>
            <div className="gamelist__items-built">
              <div className="gamelist__built-item-container">
                <div className="gamelist__built-item">
                  <img src={getItems(player, 0)} alt="league item slot 0" />
                </div>
                <div className="gamelist__built-item">
                  <img src={getItems(player, 1)} alt="league item slot 1" />
                </div>
                <div className="gamelist__built-item">
                  <img src={getItems(player, 2)} alt="league item slot 2" />
                </div>
                <div className="gamelist__built-item">
                  <img src={getItems(player, 6)} alt="league item slot 3" />
                </div>
              </div>
              <div className="gamelist__built-item-container">
                <div className="gamelist__built-item">
                  <img src={getItems(player, 3)} alt="league item slot 4" />
                </div>
                <div className="gamelist__built-item">
                  <img src={getItems(player, 4)} alt="league item slot 5" />
                </div>
                <div className="gamelist__built-item">
                  <img src={getItems(player, 5)} alt="league item slot 6" />
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
            {/* <div className="gamelist_tab"></div> */}
          </div>
        </>)
      })}
    </section>
  )
}
