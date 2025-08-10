import { sampleGames } from "../../data_sampleGames";

export function getGenres() {
  const arr = [];
  let currGenreID = 0;
  while (currGenreID < 100) {
    checkGenres(currGenreID, arr);
    currGenreID++;
  }
  return arr;
}

function checkGenres(i, array) {
  const hasGenre = (genre) => genre.id == i;
  let isFound = false;
  let genreName = "";
  sampleGames.forEach((game) => {
    if (isFound) return;
    if (!game) return;
    if (!game.genres) return;
    if (game.genres.some(hasGenre)) {
      genreName = game.genres.find((obj) => obj.id == i).description;
      isFound = true;
    }
  });
  if (genreName) array.push({ id: i, description: genreName });
}
