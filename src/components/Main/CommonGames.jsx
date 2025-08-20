import { useState } from "react";
import SelectedGame from "../SelectedGame";
import "./CommonGames.css";

export default function CommonGames({ games }) {
  const [randomGame, setRandomGame] = useState(null);
  function pickRandomGame() {
    setRandomGame(games[Math.floor(Math.random() * games.length)]);
  }
  console.log(games);
  return (
    <section id={randomGame ? "common-games-random" : "common-games"}>
      <div id="random-game-btns">
        {randomGame && (
          <button
            onClick={() => {
              setRandomGame(null);
            }}
          >
            Back
          </button>
        )}
        <button onClick={pickRandomGame}>
          {randomGame ? "Try again" : "Pick radom game"}
        </button>
      </div>
      {randomGame && (
        <>
          <SelectedGame game={randomGame} />
        </>
      )}
      {!randomGame && (
        <ul>
          {games.map((game, i) => {
            if (!game) return;
            return (
              <li className="game" key={i}>
                <img src={game.capsule_image} alt={game.name + " thumbnail"} />
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
