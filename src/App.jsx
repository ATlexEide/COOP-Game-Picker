import { useEffect, useState } from "react";
import "./App.css";
import PlayerSelect from "./components/Main/PlayerSelect";
import { getUserProfile } from "./utils/getUserProfile";
import getAndSetUserLibraries from "./utils/getAndSetUserLibraries";
import getCommonGames from "./utils/getCommonGames";
import CommonGames from "./components/Main/CommonGames";

export default function App() {
  useEffect(() => {
    console.clear();
  }, []);
  const [userLibraries, setUserLibraries] = useState([]);
  // USER ONE
  const [userIdOne, setUserIdOne] = useState("76561198217411617");
  const [userOne, setUserOne] = useState(null);
  // USER TWO
  const [userIdTwo, setUserIdTwo] = useState("76561198166759634");
  const [userTwo, setUserTwo] = useState(null);

  const [commonGames, setCommonGames] = useState(null);
  async function getLibraries() {
    getAndSetUserLibraries(setUserLibraries, userOne, userTwo);
  }
  async function compareGames() {
    const commonGames = await getCommonGames(userLibraries);
    console.log(commonGames);
    setCommonGames(commonGames);
  }
  console.log(commonGames);
  useEffect(() => {
    if (userIdOne) getUserProfile(userIdOne, setUserOne);
    if (userIdTwo) getUserProfile(userIdTwo, setUserTwo);
    console.log("running compare");
    if (userLibraries.length) compareGames();
  }, [userIdOne, userIdTwo, userLibraries]);
  console.log("common Games 1", commonGames);
  // console.log("common Games 2", commonGames[0]);
  return (
    <>
      <h1>GAME SPINNER</h1>
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
        </section>

        {commonGames && <CommonGames games={commonGames} />}
      </main>
    </>
  );
}
