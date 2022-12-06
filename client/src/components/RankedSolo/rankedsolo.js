import React, { useState, useEffect } from 'react';
import './rankedsolo.css';
//import platinumRank from '../../assets/img/ranked-emblems/Emblem_PLATINUM.png';

export default function Rankedsolo({ summonerId, region }) {
  const [rankedStats, setRankedStats] = useState([{
    tier: 'BRONZE',
  }]);
  const [isLoading, setIsLoading] = useState(true);

  const rankEmblem = require(`../../assets/img/ranked-emblems/Emblem_${rankedStats[0].tier}.png`)

  useEffect(() => {
    fetch(`http://localhost:3001/api/region/${region}/encryptedSummonerId/${summonerId}`)
      .then(response => response.json())
      .then(data => setRankedStats(data))
      .catch(error => { console.error('Error fetching data: ', error) })
  }, [summonerId])

  useEffect(() => {
    if (rankedStats[0].tier !== 'BRONZE') {
      setIsLoading(false);
    }
  }, [rankedStats[0].tier])

  function winratePercent(wins, losses) {
    return Math.round(100 * wins / (wins + losses))
  }

  if (isLoading) return (
    <section className="summonerpage__ranked-solo">
      <div className="ranked-solo__title">RANKED SOLO</div>
    </section>
  );

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
