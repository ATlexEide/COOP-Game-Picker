import { useEffect, useState } from "react";
import "./App.css";
import PlayerSelect from "./components/Main/PlayerSelect";
import { getUserProfile } from "./utils/getUserProfile";
import getAndSetUserLibraries from "./utils/getAndSetUserLibraries";
import getCommonGames from "./utils/getCommonGames";
import CommonGames from "./components/Main/CommonGames";
import { getDetailedLibrary } from "./utils/Dev/getDetailedLibrary";
import { getCategories } from "./utils/Dev/getCategories";
import { getGenres } from "./utils/Dev/getGenres";

export default function App() {
  // TEMP
  useEffect(() => {
    // console.clear();
    // let counter = 0;
    // games.forEach((game) => {
    //   if (!game) return;
    //   if (game.categories.find((e) => e.id === 44)) {
    //     console.log(game.name);
    //     console.log(game.categories);
    //     counter++;
    //   }
    // });
    //     const selectedCategories = [2, 1, 9, 63];
    //     const categoryNames = selectedCategories.forEach(e=> return )
    //  console.log("Selected: ")
    //     console.log(games[1].categories);
    //     const filtered = games.filter((game) => {
    //       if (!game) return;
    //       let isValid = true;
    //       selectedCategories.forEach((category) => {
    //         if (!isValid) return;
    //         if (game.categories.includes(category)) isValid = false;
    //       });
    //       if (isValid) return game;
    //     });
    //     console.log(games.length);
    //     console.log(filtered.length);
    //     console.log(filtered[0].categories);
    // _getLibrary();
    console.log(getDetailedLibrary("76561198077708670", "logEnabled"));
  }, []);

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [userLibraries, setUserLibraries] = useState([]);
  // USER ONE
  const [userIdOne, setUserIdOne] = useState("76561198217411617");
  const [userOne, setUserOne] = useState(null);
  // USER TWO
  const [userIdTwo, setUserIdTwo] = useState("76561198166759634");
  const [userTwo, setUserTwo] = useState(null);

  const [commonGames, setCommonGames] = useState(null);

  async function getLibraries() {
    await getAndSetUserLibraries(
      setError,
      setStatus,
      setUserLibraries,
      userOne,
      userTwo
    );
    compareGames();
  }

  async function compareGames() {
    const commonGames = await getCommonGames(
      setError,
      setStatus,
      userLibraries
    );
    setCommonGames(commonGames);
    // setStatus("Done!");
  }

  useEffect(() => {
    if (userIdOne) getUserProfile(userIdOne, setUserOne);
    if (userIdTwo) getUserProfile(userIdTwo, setUserTwo);
  }, [userIdOne, userIdTwo]);

  // console.log("common Games 2", commonGames[0]);
  return (
    <>
      <main>
        <section id="user-select">
          <div id="userID-input">
            <PlayerSelect setUserId={setUserIdOne} text="User One" />
            <p></p>
            <PlayerSelect setUserId={setUserIdTwo} text="User Two" />
          </div>
          <div id="selected-userID-text">
            {userOne && (
              <section className="user-info">
                <h1>{userOne.personaname}</h1>
                <img src={userOne.avatarfull} alt="" />
                <p>SteamID: {userOne.steamid}</p>
              </section>
            )}
            {userTwo && (
              <section className="user-info">
                <h1>{userTwo.personaname}</h1>
                <img src={userTwo.avatarfull} alt="" />
                <p>SteamID: {userTwo.steamid}</p>
              </section>
            )}
          </div>
          <button onClick={getLibraries}>Compare libraries</button>
          {status && <p>{status}</p>}
          {error && <p>{error}</p>}
        </section>

        {commonGames && <CommonGames games={commonGames} />}
      </main>
    </>
  );
}
