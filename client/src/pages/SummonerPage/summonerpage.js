import React, { useState, useEffect } from 'react';
import './summonerpage.css';
import RankedSolo from '../../components/RankedSolo/rankedsolo.js';

//import placeHolder from '../../assets/img/profileicon/508.png';

export default function Summonerpage(props) {
  const [account, setAccount] = useState({
    profileIconId: 508,
    name: 'Nameless',
    summonerLevel: 0
  });

  // gather and sets information collected for region and name to use in a fetch to store fetch data in account state
  const [currentInitInfo, setInitInfo] = useState({ region: '', name: '' });

  // const profileIconLink = `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${account.profileIconId}.png`;
  const profileIconLink = require(`../../assets/img/profileicon/${account.profileIconId}.png`);
 
  // useEffect for fetching using props from homepage input information (1 time use)
  useEffect(() => {
    if (props.length !== 0) apiInitialCall(props.region, props.summonerName);
  }, []);

  // Gathers the input for name and region when on the summoner page
  useEffect(() => {
    apiInitialCall(currentInitInfo.region, currentInitInfo.name);
  }, [currentInitInfo])

  // Uses the enter button to submit user input and region to fetch data from riot api
  function handleInputSubmit(e) {
    e.preventDefault();

    // get summoner name input
    let currentSummonerName = document.querySelector('.summonerpage__search-input');
    
    // assign the text value from select to variable called region
    const selection = document.querySelector('.summonerpage__region-select');
    const currentRegion = selection.options[selection.selectedIndex].value;
    
    // sets initial info for name and region input collections
    setInitInfo({ region: currentRegion, name: currentSummonerName.value });
    
    // empty the value in the input after submitting
    currentSummonerName.value = '';
  } 

  // Reusable function to make the initial api call for league account
  function apiInitialCall(region, name) {
    fetch(`http://localhost:3001/api/region/${region}/name/${name}`)
      .then(response => response.json())
      .then(data => { setAccount(data) })
      .catch(error => { console.error('Error fetching data: ', error) })
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
        <button className="btn summonerpage__search-btn" onClick={handleInputSubmit}>Enter</button>
      </section>
      <section className="summonerpage__icon-and-name-wrapper">
        <div className="summonerpage__img-and-level-wrapper">
          <div className="summonerpage__img">
            <img src={profileIconLink} alt="League of Legends" />
          </div>
          <div className="summonerpage__level">{account.summonerLevel}</div>
        </div>
        <div className="summonerpage__name-and-btn-wrapper">
          <h3 className="summonerpage__name">{account.name}</h3>
          <button className="btn summonerpage__update-btn">Update</button>
        </div>
      </section>
      <RankedSolo />
    </div>
  )
}
