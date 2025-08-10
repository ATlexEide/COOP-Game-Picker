import { games } from "../../data";
export function getGenres() {
  let currGenreID = 0;
  while (currGenreID < 100) {
    checkGenres(currGenreID);
    currGenreID++;
  }
}

function checkGenres(i) {
  const hasGenre = (genre) => genre.id == i;
  let isFound = false;
  let genreName = "";
  games.forEach((game) => {
    if (isFound) return;
    if (!game) return;
    if (!game.genres) return;
    if (game.genres.some(hasGenre)) {
      genreName = game.genres.find((obj) => obj.id == i).description;
      isFound = true;
    }
  });
  console.log(i);
  if (!isFound) return;
  if (isFound) console.log("ID", i, "DESCRIPTION", genreName);
}
////////////
