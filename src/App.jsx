import { useEffect, useState } from "react";
import "./App.css";
import PlayerSelect from "./components/Main/PlayerSelect";
import { getUserProfile } from "./utils/getUserProfile";
import getAndSetUserLibraries from "./utils/getAndSetUserLibraries";
import getCommonGames from "./utils/getCommonGames";
import CommonGames from "./components/Main/CommonGames";
import { getDetailedLibrary } from "./utils/Dev/getDetailedLibrary";
import { getUserLibrary } from "./utils/getUserLibrary";
import { getCategories } from "./utils/Dev/getCategories";
import { getGenres } from "./utils/Dev/getGenres";

import { genres } from "./data_genres";
import { categories } from "./data_categories";
import { sampleGames } from "./data_sampleGames";

export default function App() {
  // TEMP
  useEffect(() => {
    console.log("UserLibs ", userLibraries);
    console.log("UserOne ", userOne);
    console.log("UserTwo ", userTwo);
  }, []);
  async function logLib() {
    const _lib = await getUserLibrary("76561197988759223");
    console.log(_lib);
  }

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [userLibraries, setUserLibraries] = useState([]);
  const [_categories, setCategories] = useState(categories.CheckboxArray());
  const [_genres, setGenres] = useState(genres.CheckboxArray());
  // USER ONE
  const [userIdOne, setUserIdOne] = useState(null);
  const [userOne, setUserOne] = useState(null);
  // USER TWO
  const [userIdTwo, setUserIdTwo] = useState(null);
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
    if (!userOne && userIdOne) getUserProfile(userIdOne, setUserOne);
    if (!userTwo && userIdTwo) getUserProfile(userIdTwo, setUserTwo);
    if (userOne && userTwo) getLibraries();
  }, [userIdOne, userIdTwo, userOne, userTwo]);

  // console.log("common Games 2", commonGames[0]);
  return (
    <>
      <main>
        <h2>Temp IDs for DEV</h2>
        <ul>
          <li>Alex: 76561198166759634</li>
          <li>Chooie: 76561198269275836</li>
          <li>Lenni: 76561198217411617</li>
        </ul>
        <section id="user-select">
          <div id="userID-input">
            <PlayerSelect setUserId={setUserIdOne} text="User One" />
            <p></p>
            <PlayerSelect setUserId={setUserIdTwo} text="User Two" />
          </div>
          <div id="selected-userID-text">
            {userOne !== null && (
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
          {userOne && userTwo && Boolean(userLibraries.length) && (
            <button onClick={compareGames}>Compare libraries</button>
          )}
          {commonGames && (
            <div>
              <section>
                <h2>Genres</h2>
                <hr />
                {_genres.map((genre, i) => (
                  <div key={i}>
                    <label htmlFor={genre.id}>{genre.desc}</label>
                    <input
                      type="checkbox"
                      name={genre.description}
                      id={genre.id}
                    />
                  </div>
                ))}
              </section>
              <section>
                <h2>Categories</h2>
                <hr />
                {_categories.map((cat, i) => (
                  <div key={i}>
                    <label htmlFor={cat.id}>{cat.desc}</label>
                    <input type="checkbox" name={cat.description} id={cat.id} />
                  </div>
                ))}
              </section>
            </div>
          )}
          {status && !error && <p>{status}</p>}
          {error && <p>{error}</p>}
        </section>

        {commonGames && <CommonGames games={commonGames} />}
      </main>
    </>
  );
}
