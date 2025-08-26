import { useState } from "react";
import SelectedGame from "../SelectedGame";
import "./CommonGames.css";

import diceIcon from "../../assets/icons/dice.png";
import backIcon from "../../assets/icons/back.png";

export default function CommonGames({ games }) {
  const [selectedGame, setSelectedGame] = useState(null);
  function pickRandomGame() {
    console.clear();
    const randomIndex = Math.floor(Math.random() * games.length);
    console.log(randomIndex);
    if (!games[randomIndex]) pickRandomGame();
    else {
      setSelectedGame(games[randomIndex]);
    }
  }
  console.log(games);
  if (!games.length)
    return (
      <section id="no-games">
        <p>hmmm.... doesn&apos;t seem like any games fit your filter</p>
      </section>
    );
  return (
    <section id={selectedGame ? "selected-game" : "common-games"}>
      <div id="random-game-btns">
        {selectedGame && (
          <button
            className="steam-stop"
            onClick={() => {
              setSelectedGame(null);
            }}
          >
            <img id="backIcon" className="button-icon" src={backIcon} alt="" />
            Back
          </button>
        )}
        {games.length > 1 && (
          <button onClick={pickRandomGame} className="steam-play">
            <img
              id="randomIcon"
              className="button-icon"
              src={diceIcon}
              alt=""
            />
            {selectedGame ? "NEW GAME" : "PICK RANDOM GAME"}
          </button>
        )}
      </div>
      {selectedGame && (
        <>
          <SelectedGame game={selectedGame} />
        </>
      )}
      {!selectedGame && (
        <ul>
          {games.map((game, i) => {
            if (!game) return;
            return (
              <li
                onClick={() => {
                  setSelectedGame(game);
                }}
                className="game"
                key={i}
              >
                <img src={game.capsule_image} alt={game.name + " thumbnail"} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
