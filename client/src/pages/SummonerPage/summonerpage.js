import React from 'react';
import './summonerpage.css';
import placeHolder from '../../assets/img/profileicon/508.png';

export default function Summonerpage(props) {
  return (
    <div className="summonerpage">
      <section className="summonerpage__icon-and-name-wrapper">
        <div className="summonerpage__img-and-level-wrapper">
          <div className="summonerpage__img">
            <img src={placeHolder} alt="placeholder" />
          </div>
          <div className="summonerpage__level">528</div>
        </div>
        <div className="summonerpage__name-and-btn-wrapper">
          <h3 className="summonerpage__name">Summoner</h3>
          <button className="btn summonerpage__update-btn">Update</button>
        </div>
      </section>
    </div>
  )
}
