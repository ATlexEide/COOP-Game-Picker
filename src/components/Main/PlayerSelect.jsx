import { useState } from "react";
import "./PlayerSelect.css";

export default function PlayerSelect({ text, setUserId, clearUser, player }) {
  const [input, setInput] = useState("");
  return (
    <div id="player-select">
      <h2>{text}</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        className="mono-button"
        onClick={() => {
          clearUser(player);
          setUserId(input);
        }}
      >
        Get User
      </button>
    </div>
  );
}
