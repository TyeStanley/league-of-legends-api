import React, { useState } from 'react';
import './homepage.css';
import PlayerStatsPage from '../SummonerPage/summonerpage.js';

export default function Homepage() {
  const [region, setRegion] = useState('');
  const [summonerName, setSummonerName] = useState('');
  const [shown, setShown] = useState(false);
  
  function handleFormSubmit(e) {
    if (!e.target.matches('.homepage__submit-btn')) return;
    e.preventDefault();

    // get summoner name input
    const currentSummonerName = document.querySelector('.homepage__summoner-name-input').value
    
    // assign the text value from select to variable called region
    const selection = document.querySelector('.homepage__region-select');
    const currentRegion = selection.options[selection.selectedIndex].value;

    // Sets the value of the region and name
    setRegion(currentRegion);
    setSummonerName(currentSummonerName);
    // Shown is set to true to render PlayerStatsPage and to pass off region and name values
    setShown(true);
  }

  if (shown) return <PlayerStatsPage region={region} summonerName={summonerName} />

  return (
    <div className="homepage">
      <section className="homepage__hero">
        <div className="homepage__hero-overlay">
          <form
            className="homepage__hero-form"
            onClick={handleFormSubmit}
          >
            <input
              className="input homepage__summoner-name-input"
              type="text"
              placeholder="Player Name"
            />
            <div className="homepage__region-and-submit-container">
              <select className="select homepage__region-select">
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
              <button className="btn homepage__submit-btn">Enter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
