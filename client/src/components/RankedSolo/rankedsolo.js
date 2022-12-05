import React from 'react';
import './rankedsolo.css';
import platinumRank from '../../assets/img/ranked-emblems/Emblem_Platinum.png';

export default function Rankedsolo({ summonerId }) {

  return (
    <section className="summonerpage__ranked-solo">
      <div className="ranked-solo__title">Ranked Solo</div>
      <div className="ranked-solo__container">
        <div className="ranked-solo__emblem-rank">
          <img src={platinumRank} alt="Platinum Emblem Rank" />
        </div>
        <div className="ranked-solo__rank-and-lp-wrapper">
          <div className="ranked-solo__rank">Platinum 4</div>
          <div className="ranked-solo__lp">1 LP</div>
        </div>
        <div className="ranked-solo__win-lose-and-winrate-wrapper">
          <div className="ranked-solo__win-lose">12W 3L</div>
          <div className="ranked-solo__winrate">Win Rate 80%</div>
        </div>
      </div>
    </section>
  )
}
