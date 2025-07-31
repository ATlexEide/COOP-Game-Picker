import "./CommonGames.css";

export default function CommonGames({ games }) {
  return (
    <section id="common-games">
      <ul>
        {games.map((game, i) => {
          if (!game) return;
          console.log(game.name);
          return (
            <li key={i}>
              <img src={game.capsule_image} alt={game.name + " thumbnail"} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
