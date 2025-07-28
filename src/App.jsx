import { useEffect, useState } from "react";
import "./App.css";
import PlayerSelect from "./components/Main/PlayerSelect";
import { getUserProfile } from "./utils/getUserProfile";
import { getUserLibrary } from "./utils/getUserLibrary";
import { getGameDetails } from "./utils/getGameDetails";

export default function App() {
  const [userLibraries, setUserLibraries] = useState([]);
  // USER ONE
  const [userIdOne, setUserIdOne] = useState(null);
  const [userOne, setUserOne] = useState(null);
  const [userOneLibrary, setUserOneLibrary] = useState(null);
  // USER TWO
  const [userIdTwo, setUserIdTwo] = useState(null);
  const [userTwo, setUserTwo] = useState(null);
  const [userTwoLibrary, setUserTwoLibrary] = useState(null);

  function runCompare() {
    getUserLibrary(userIdOne, setUserOneLibrary);
    // if (userLibraries.length < 2) {
    //   alert("input both userIDs");
    //   return;
    // }
  }
  useEffect(() => {
    console.log(userOneLibrary);
    if (userOneLibrary) getGameDetails(userOneLibrary[13].appid);
    if (!userOneLibrary) {
      getUserProfile(userIdOne, setUserOne);
      getUserProfile(userIdTwo, setUserTwo);
    }
  }, [userIdOne, userIdTwo, userOneLibrary]);

  if (userOne) console.log("userOne:", userOne);
  if (userOneLibrary) console.log("userOneLibrary:", userOneLibrary);
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
          <button onClick={runCompare}>Compare libraries</button>
        </section>

        {/* <section id="common-games">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section> */}
      </main>
    </>
  );
}
