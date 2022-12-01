import React from 'react';
import './summonerpage.css';
import placeHolder from '../../assets/img/profileicon/508.png';

export default function Summonerpage({ accountData }) {
  if (accountData) {
    const {
      accountId,
      id,
      name,
      profileIconId,
      puuid,
      revisionDate,
      summonerLevel
    } = accountData;

    //const profileIconLink = require(`../../assets/img/profileicon/${profileIconId}.png`);

    const profileIconLink = `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileIconId}.png`
  }
  
  return (
    <div className="summonerpage">
      <section className="summonerpage__region-and-name-search">
        <div className="summonerpage__region-select-wrapper">
          <span className="summonerpage__region-span">Region</span>
          <select className="select summonerpage__region-select">
            <option value="na1">NA</option>
            <option value="euw1">EUW</option>
            <option value="eun1">EUN</option>
            <option value="kr">KR</option>
            <option value="br1">BR</option>
            <option value="jp1">JP</option>
            <option value="ru">RU</option>
            <option value="oc1">OCE</option>
            <option value="tr1">TR</option>
            <option value="la1">LAN</option>
            <option value="la2">LAS</option>
          </select>
        </div>
        <div className="summonerpage__search-input-wrapper">
          <span className="summonerpage__search-span">Search</span>
          <input className="input summonerpage__search-input" type="text" />
        </div>
        <button className="btn summonerpage__search-btn">Enter</button>
      </section>

      <section className="summonerpage__icon-and-name-wrapper">
        <div className="summonerpage__img-and-level-wrapper">
          <div className="summonerpage__img">
            <img src={profileIconLink || placeHolder} alt="placeholder" />
          </div>
          <div className="summonerpage__level">{summonerLevel || 'No Summoner Name'}</div>
        </div>
        <div className="summonerpage__name-and-btn-wrapper">
          <h3 className="summonerpage__name">{name}</h3>
          <button className="btn summonerpage__update-btn">Update</button>
        </div>
      </section>
    </div>
  )
}
