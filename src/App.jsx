import { sampleGames } from "./data_sampleGames";

import { useEffect, useState } from "react";
import PlayerSelect from "./components/Main/PlayerSelect";
import { getUserProfile } from "./utils/getUserProfile";
import getAndSetUserLibraries from "./utils/getAndSetUserLibraries";
import getCommonGames from "./utils/getCommonGames";
import CommonGames from "./components/Main/CommonGames";
import { getUserLibrary } from "./utils/getUserLibrary";
import Filter from "./components/Filter";

import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";
import "./App.css";

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

  // USER ONE
  const [userIdOne, setUserIdOne] = useState(null);
  const [userOne, setUserOne] = useState(null);
  // USER TWO
  const [userIdTwo, setUserIdTwo] = useState(null);
  const [userTwo, setUserTwo] = useState(null);

  const [commonGames, setCommonGames] = useState(null);
  const [filteredGames, setFilteredGames] = useState(null);

  function clearUser(player) {
    setCommonGames(null);
    const id = `setUserId${player}(null)`;
    const profile = `setUser${player}(null)`;
    eval(id);
    eval(profile);
  }

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
            <PlayerSelect
              setUserId={setUserIdOne}
              player={"One"}
              text="User One"
              clearUser={clearUser}
            />
            <p></p>
            <PlayerSelect
              setUserId={setUserIdTwo}
              player={"Two"}
              text="User Two"
              clearUser={clearUser}
            />
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
          {userOne &&
            userTwo &&
            !commonGames &&
            !status &&
            Boolean(userLibraries.length) && (
              <button id="compare-btn" onClick={compareGames}>
                Compare libraries
              </button>
            )}
          {status && !error && (
            <>
              <Zoomies
                size="150"
                stroke="3"
                bgOpacity="0.1"
                speed="1.1"
                color="white"
              />
              <p id="status-text">{status}</p>
              <Zoomies
                id="zoomies-reverse"
                size="150"
                stroke="3"
                bgOpacity="0.1"
                speed="1.1"
                color="white"
              />
            </>
          )}
          {error && <p>{error}</p>}
        </section>
        {commonGames && (
          <Filter
            setFilteredGames={setFilteredGames}
            commonGames={commonGames}
          />
        )}
        {!filteredGames && commonGames && <CommonGames games={commonGames} />}
        {filteredGames && <CommonGames games={filteredGames} />}
      </main>
    </>
  );
}
