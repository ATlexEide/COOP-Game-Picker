export default async function getGameDetails(
  setStatus,
  setError,
  currentGame,
  totalGames,
  appID
) {
  setStatus(`Getting game details [${currentGame}/${totalGames}]`);
  console.log("Getting game details");
  try {
    const req = await fetch(
      `http://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
    );
    const res = await req.json();
    return res[appID].data;
  } catch (error) {
    setError(error);
    console.log(error);
  }
}
