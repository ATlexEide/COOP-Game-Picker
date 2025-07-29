export default async function getCommonGames(library) {
  console.clear();
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

  const commonLibrary = [];

  shortestLib.forEach((game) => {
    // console.log(game.appid, index);
    const currGame = game;
    console.log(currGame);
    if (longestLib.includes(currGame)) commonLibrary.push(currGame);
  });
  return commonLibrary;
}
