import React, { useState } from 'react';
import './homepage.css';
import PlayerStatsPage from '../PlayerStatsPage/playerstatspage.js'

export default function Homepage() {
  const [accountData, setAccountData] = useState(null);
  // const [region, setRegion] = useState(null);
  // const [summonerName, setSummonerName] = useState(null);
  // const [loading, setLoading] = useState(true);

  function handleFormSubmit(e) {
    if (!e.target.matches('.homepage__submit-btn')) return;
    e.preventDefault();

    // get summoner name input
    const summonerName = document.querySelector('.homepage__summoner-name-input').value
    
    // assign the text value from select to variable called region
    const selection = document.querySelector('.homepage__region-select');
    const region = selection.options[selection.selectedIndex].value;
    
    fetch(`http://localhost:3001/api/region/${region}/name/${summonerName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAccountData(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error); 
      })
  }

  console.log(accountData);
  if (accountData) return <PlayerStatsPage accountData={accountData} />

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
