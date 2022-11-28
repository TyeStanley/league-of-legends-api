import React from 'react';
import './homepage.css';

export default function homepage() {

  function getPlayerStats(summonerName, region) {
    
  }

  function handleFormSubmit(e) {
    if (!e.target.matches('.homepage__submit-btn')) return;
    e.preventDefault();

    // get summoner name input
    const summonerName = document.querySelector('.homepage__summoner-name-input').value
    
    // assign the text value from select to variable called region
    const selection = document.querySelector('.homepage__region-select');
    const region = selection.options[selection.selectedIndex].text;
    
    getPlayerStats(summonerName, region);
  }

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
                <option value="NA">NA</option>
                <option value="EUW">EUW</option>
                <option value="EUN">EUN</option>
                <option value="KR">KR</option>
                <option value="BR">BR</option>
                <option value="JP">JP</option>
                <option value="RU">RU</option>
                <option value="OCE">OCE</option>
                <option value="TR">TR</option>
                <option value="LAN">LAN</option>
                <option value="LAS">LAS</option>
              </select>
              <button className="btn homepage__submit-btn">Enter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
