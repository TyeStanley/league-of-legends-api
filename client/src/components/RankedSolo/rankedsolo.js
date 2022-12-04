import React from 'react';
import './rankedsolo.css';
import platinumRank from '../../assets/img/ranked-emblems/Emblem_Platinum.png';

export default function Rankedsolo() {
  return (
    <section className="summonerpage__ranked-solo">
      <h3>Ranked Solo</h3>
      <div>
        <div>
          <img src={platinumRank} alt="Platinum Emblem Rank" />
        </div>
        <div>
          <div>Platinum 4</div>
          <div>1 LP</div>
        </div>
        <div>
          <div>12W 3L</div>
          <div>Win Rate 80%</div>
        </div>
      </div>
    </section>
  )
}
