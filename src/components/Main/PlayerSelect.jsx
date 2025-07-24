export default function PlayerSelect({ text, setUserIdOne }) {
  return (
    <div id="player-select">
      <h2>{text}</h2>
      <input
        type="text"
        onChange={(e) => {
          setUserIdOne();
        }}
      />
    </div>
  );
}
