import React from 'react';
import './summonerpage.css';
import dummyImg from '../../assets/homepage-background-image.jpg';

export default function Summonerpage(props) {
  return (
    <div className="summonerpage">
      <section className="summonerpage__icon-and-name-wrapper">
        <div className="summonerpage__img-and-level-wrapper">
          <div className="summonerpage__img">
            <img src={dummyImg} alt="dummyImg" />
          </div>
          <div className="summonerpage__level">528</div>
        </div>
        <h3 className="summonerpage__name">Summoner</h3>
        <button className="btn summonerpage__update-btn">Update</button>
      </section>
    </div>
  )
}
