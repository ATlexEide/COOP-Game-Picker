import { useState } from "react";

export default function PlayerSelect({ text, setUserId, clearUser, player }) {
  const [input, setInput] = useState("");
  return (
    <div id="player-select">
      <h2>{text}</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          clearUser(player);
          setUserId(input);
        }}
      >
        Click
      </button>
    </div>
  );
}
