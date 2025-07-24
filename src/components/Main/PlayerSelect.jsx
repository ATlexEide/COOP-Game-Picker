export default function PlayerSelect({ text, setUserId }) {
  return (
    <div id="player-select">
      <h2>{text}</h2>
      <input
        type="text"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
    </div>
  );
}
