export default async function getGameDetails(
  appID,
  setStatus,
  setError,
  currentGame,
  totalGames,
  skippedGamesCounter
) {
  if (setStatus)
    setStatus(
      `Getting game details [${currentGame}/${totalGames}]
Skipped games: ${skippedGamesCounter}`
    );
  try {
    const req = await fetch(
      `http://undecidedgamespinnerserver-production.up.railway.app/game/${appID}`
    );
    const res = await req.json();
    return res[appID].data;
  } catch (error) {
    if (!setError) return;
    setError(error);
    console.log(error);
  }
}
