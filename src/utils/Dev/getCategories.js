import { sampleGames } from "../../data_sampleGames";

export function getCategories() {
  const arr = [];
  let currCatID = 0;
  while (currCatID < 100) {
    checkCategoryID(currCatID, arr);
    currCatID++;
  }
  return arr;
}

function checkCategoryID(i, array) {
  const hasCat = (cat) => cat.id === i;
  let isFound = false;
  let catName = "";
  sampleGames.forEach((game) => {
    if (isFound) return;
    if (!game) return;
    if (!game.categories) return;
    if (game.categories.some(hasCat)) {
      catName = game.categories.find((obj) => obj.id === i).description;
      isFound = true;
    }
  });
  if (catName) array.push({ id: i, description: catName });
}
