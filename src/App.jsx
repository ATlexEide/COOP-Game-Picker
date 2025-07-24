import { useState } from "react";
import "./App.css";
import PlayerSelect from "./components/Main/PlayerSelect";

export default function App() {
  const [userLibraries, setUserLibraries] = useState([]);
  const [userIdOne, setUserIdOne] = useState(null);
  const [userIdTwo, setUserIdTwo] = useState(null);

  function runCompare() {
    if (userLibraries.length < 2) {
      alert("input both userIDs");
      return;
    }
  }

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
            {userIdOne && <p>{`User one: ${userIdOne}`}</p>}
            {userIdOne && <p>{`User two: ${userIdTwo}`}</p>}
          </div>
          <button onClick={runCompare}>Compare libraries</button>
        </section>
        <section id="common-games">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </main>
    </>
  );
}
