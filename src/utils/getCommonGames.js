import getGameDetails from "./getGameDetails";

export default async function getCommonGames(setError, setStatus, library) {
  if (!library) return;
  setStatus("Finding Common Games");
  console.log("Finding Common Games");
  const [userOneLib, userTwoLib] = library;
  const libOneLength = userOneLib.length;
  const libTwoLength = userTwoLib.length;

  const longestLib =
    libOneLength > libTwoLength
      ? userOneLib.map((game) => game.appid)
      : userTwoLib.map((game) => game.appid);
  const shortestLib =
    libOneLength < libTwoLength
      ? userOneLib.map((game) => game.appid)
      : userTwoLib.map((game) => game.appid);

  const commonAppIdLibrary = [];

  shortestLib.forEach(async (game) => {
    const currGame = game;
    if (longestLib.includes(currGame)) commonAppIdLibrary.push(currGame);
  });

  const commonLibrary = [];
  for (let i = 0; i < commonAppIdLibrary.length; i++) {
    const game = await getGameDetails(
      setStatus,
      setError,
      i + 1,
      commonAppIdLibrary.length,
      commonAppIdLibrary[i]
    );
    commonLibrary.push(game);
  }
  console.log(commonAppIdLibrary);
  return commonLibrary;
}
