export default async function getGameDetails(appID) {
  let game;
  await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
  )
    .then((res) => res.json())
    .then((res) => (game = res[appID].data));
  return game;
}
