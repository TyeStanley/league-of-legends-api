import React, { useState, useEffect } from 'react';
import './rankedsolo.css';

export default function Rankedsolo({ summonerId, region }) {
  const [rankedStats, setRankedStats] = useState([{
    freshBlood: false,
    hotStreak: false,
    inactive: false,
    leagueId: '',
    leaguePoints: 0,
    losses: 0,
    queueType: 'RANKED_SOLO_5x5',
    rank: '',
    summonerId: '',
    summonerName: '',
    tier: 'PLACEHOLDER',
    veteran: false,
    wins: 0
  }]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUnranked, setIsUnranked] = useState(false);
  
  // Rank Emblem dynamic
  const rankEmblem = require(`../../assets/img/ranked-emblems/Emblem_${rankedStats[0].tier}.png`)

  // Fetch the data for the current ranked stats of a summonerId and region
  useEffect(() => {
    fetch(`http://localhost:3001/api/region/${region}/encryptedSummonerId/${summonerId}`)
      .then(response => response.json())
      .then(data => {
        // if account is unranked it will not return any object in the array
        if (data.length !== 0) {
          setRankedStats(data);
          setIsUnranked(false);
        }
        if (data.length === 0) setIsUnranked(true);
      })
      .catch(error => { console.error('Error fetching data: ', error) })
  }, [summonerId, region])

  // If tier doesn't equal to null then set the loading screen to false
  useEffect(() => {
    if (rankedStats[0].tier !== 'PLACEHOLDER') setIsLoading(false);
  }, [rankedStats])

  // Simple function to find the win % of the account
  function winratePercent(wins, losses) {
    return Math.round(100 * wins / (wins + losses))
  }

  if (isUnranked) return (
    <section className="summonerpage__ranked-solo">
      <div className="ranked-solo__title">RANKED SOLO</div>
      <div className="ranked-solo__container">
        <div className="ranked-solo__emblem-rank visibility">
          <img src={rankEmblem} alt="Emblem Rank" />
        </div>
        <div className="ranked-solo__rank-and-lp-wrapper">
          <div className="ranked-solo__rank">UNRANKED</div>
          <div className="ranked-solo__lp">0 LP</div>
        </div>
        <div className="ranked-solo__win-lose-and-winrate-wrapper">
          <div className="ranked-solo__win-lose">0W 0L</div>
          <div className="ranked-solo__winrate">Win Rate N/A</div>
        </div>
      </div>
    </section>
  )

  if (isLoading) return (
    <section className="summonerpage__ranked-solo">
      <div className="ranked-solo__title">RANKED SOLO</div>
    </section>
  )

  return (
    <section className="summonerpage__ranked-solo">
      <div className="ranked-solo__title">RANKED SOLO</div>
      <div className="ranked-solo__container">
        <div className="ranked-solo__emblem-rank">
          <img src={rankEmblem} alt="Emblem Rank" />
        </div>
        <div className="ranked-solo__rank-and-lp-wrapper">
          <div className="ranked-solo__rank">{rankedStats[0].tier} {rankedStats[0].rank}</div>
          <div className="ranked-solo__lp">{rankedStats[0].leaguePoints} LP</div>
        </div>
        <div className="ranked-solo__win-lose-and-winrate-wrapper">
          <div className="ranked-solo__win-lose">{rankedStats[0].wins}W {rankedStats[0].losses}L</div>
          <div className="ranked-solo__winrate">Win Rate {winratePercent(rankedStats[0].wins, rankedStats[0].losses)}%</div>
        </div>
      </div>
    </section>
  )
}
