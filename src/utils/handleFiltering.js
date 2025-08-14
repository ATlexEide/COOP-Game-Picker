import { sampleGames } from "../data_sampleGames";

export function updateFilters(filter, setCommonGames) {
  let filtered = sampleGames;
  console.clear();
  if (filter.genresCount) {
    for (const [id, value] of Object.entries(filter.genres)) {
      console.log(id);
      if (value)
        filtered = filtered.filter((game) => {
          if (!game) return;
          if (!game.genres) return;
          return game.genres.some((obj) => obj.id === id);
        });
    }
  }
  if (filter.categoriesCount) {
    for (const [id, value] of Object.entries(filter.categories)) {
      if (value)
        filtered = filtered.filter((game) => {
          if (!game) return;
          if (!game.categories) return;
          return game.categories.some((obj) => obj.id === Number(id));
        });
    }
  }
  console.log(filtered);
  setCommonGames(filtered);
}

export function handleFilterUpdate(target, filter, setFilter) {
  // Genres or Categories
  const type =
    target.parentElement.parentElement.parentElement.parentElement.id;
  const id = target.id.split("-")[1];
  console.log(filter[type][id]);
  console.log(eval(filter[`${type}Count`]));
  const typeCountKey = eval(filter[`${type}Count`]);
  const typeCountValue = filter[type][id] ? typeCountKey - 1 : typeCountKey + 1;

  setFilter({
    ...filter,
    [type]: {
      ...filter[type],
      [id]: !filter[type][id]
    },
    [`${type}Count`]: typeCountValue
  });
}
