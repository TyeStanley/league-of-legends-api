import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let navigate = useNavigate();

  function handleFormSubmit(e) {
    if (!e.target.matches(".homepage__submit-btn")) return;
    e.preventDefault();
    e.stopPropagation();

    // get summoner name input
    const currentSummonerName = document.querySelector(
      ".homepage__summoner-name-input"
    ).value;

    // get current region
    const selection = document.querySelector(".homepage__region-select");
    const currentRegion = selection.options[selection.selectedIndex].value;

    navigate("/player", {
      state: { region: currentRegion, summonerName: currentSummonerName }
    });
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
              <button
                type="submit"
                className="btn homepage__submit-btn"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
