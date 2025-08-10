import { getUserLibrary } from "../getUserLibrary";
import getGameDetails from "../getGameDetails";

export async function getDetailedLibrary(userID, loggingEnabled = false) {
  const library = await getUserLibrary(userID);
  const detailedLibrary = [];
  for (let i = 0; i < library.length - 1; i++) {
    if (loggingEnabled) {
      console.clear();
      console.log(`${i} / ${library.length}`);
      console.log(library[i]);
    }
    const game = await getGameDetails(library[i].appid);
    detailedLibrary.push(game);
  }
  if (loggingEnabled) console.log(detailedLibrary);
  return detailedLibrary;
}
