export default function SelectedGame({ game }) {
  console.log(game);
  return (
    <article id="selected-game">
      <h3>{game.name}</h3>
      <img src={game.capsule_image} alt={game.name + " thumbnail"} />
    </article>
  );
}
