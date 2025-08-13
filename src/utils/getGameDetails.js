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
      `${import.meta.env.VITE_SERVER_BASE_URL}/game/${appID}`
    );
    const res = await req.json();
    return res[appID].data;
  } catch (error) {
    if (!setError) return;
    setError(error);
    console.log(error);
  }
}
