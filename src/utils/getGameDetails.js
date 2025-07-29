export async function getGameDetails(appID) {
  return await fetch(
    `https://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
  )
    .then((res) => res.json())
    .then((res) => res[appID].data);
}
