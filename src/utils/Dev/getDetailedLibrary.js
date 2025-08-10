import { getUserLibrary } from "../getUserLibrary";
import getGameDetails from "../getGameDetails";

export async function getDetailedLibrary(userID, loggingEnabled = false) {
  const library = await getUserLibrary(userID);
  console.log(library);
  const detailedLibrary = [];
  for (let i = 0; i < library?.length - 1; i++) {
    if (loggingEnabled) {
      // console.clear();
      console.log(`${i} / ${library.length}`);
      console.log(library[i]);
    }
    const game = await getGameDetails(library[i].appid);
    switch (game) {
      case "429":
        console.log("Failed to fetch, trying again in 60 seconds");
        setTimeout(() => {
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }, 1000);
        break;

      default:
        detailedLibrary.push(game);
        break;
    }
  }
  if (loggingEnabled) console.log(library);
  if (loggingEnabled) console.log(detailedLibrary);
  return detailedLibrary;
}
