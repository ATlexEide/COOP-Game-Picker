import { genres as _genres } from "../data_genres";
import { categories as _categories } from "../data_categories";

import "./Filter.css";
import { useEffect, useState } from "react";

function updateFilters(filter) {
  console.clear();
  for (const [key, value] of Object.entries(filter.genres)) {
    if (value) console.log(key);
  }
}

function handleFilterUpdate(target, filter, setFilter) {
  // Genres or Categories
  const type =
    target.parentElement.parentElement.parentElement.parentElement.id;
  const id = target.id;
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

export default function Filter() {
  const categories = _categories.CheckboxArray();
  const genres = _genres.CheckboxArray();

  const [filter, setFilter] = useState(setInitialFilter());

  function setInitialFilter() {
    const genreObj = {};
    for (const [key, value] of Object.entries(_genres)) {
      genreObj[key] = false;
    }
    const categoryObj = {};
    for (const [key, value] of Object.entries(_categories)) {
      categoryObj[key] = false;
    }
    return {
      genresCount: 0,
      categoriesCount: 0,
      genres: genreObj,
      categories: categoryObj,
      getFilterCount() {
        return this.genresCount + this.categoriesCount;
      }
    };
  }

  useEffect(() => {
    if (!filter.getFilterCount()) return;
    updateFilters(filter);
  }, [filter]);

  console.table(filter);
  console.log("Get filtercount");
  console.log(filter.getFilterCount());
  return (
    <div id="filter">
      <section id="genres">
        <details>
          <summary>Genres</summary>
          <hr />
          <ul>
            {genres.map((genre, i) => (
              <li key={i}>
                <label htmlFor={genre.id}>{genre.desc}</label>
                <input
                  type="checkbox"
                  name={genre.description}
                  id={genre.id}
                  checked={filter.genres[genre.id]}
                  onChange={(e) => {
                    console.log(genre.id);
                    console.log(filter.genres);
                    handleFilterUpdate(e.target, filter, setFilter);
                  }}
                />
              </li>
            ))}
          </ul>
        </details>
      </section>
      <section id="categories">
        <details>
          <summary>Categories</summary>
          <hr />
          <ul>
            {categories.map((cat, i) => (
              <li key={i}>
                <label htmlFor={cat.id}>{cat.desc}</label>
                <input
                  type="checkbox"
                  name={cat.description}
                  id={cat.id}
                  checked={filter.genres[cat.id]}
                  onChange={(e) => {
                    handleFilterUpdate(e.target, filter, setFilter);
                  }}
                />
              </li>
            ))}
          </ul>
        </details>
      </section>
      <button onClick={updateFilters}>Apply Filter</button>
    </div>
  );
}
