import { genres as _genres, genres } from "../data_genres";
import { categories as _categories } from "../data_categories";

import { handleFilterUpdate, updateFilters } from "../utils/handleFiltering";

import "./Filter.css";
import { useEffect, useState } from "react";

export default function Filter({ commonGames, setFilteredGames }) {
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
    if (!filter.getFilterCount()) {
      setFilteredGames(null);
      return;
    }
    updateFilters(filter, commonGames, setFilteredGames);
  }, [filter]);

  console.table(filter);
  console.log("Get filtercount");
  console.log(filter.getFilterCount());
  return (
    <div id="filter">
      <h2>Filters</h2>
      <section id="genres">
        <details>
          <summary>Genres</summary>
          <hr />
          <ul>
            {genres.map((genre, i) => (
              <li key={i} className={filter.genres[genre.id] ? "isActive" : ""}>
                <label htmlFor={`genre-${genre.id}`}>{genre.desc}</label>
                <input
                  type="checkbox"
                  name={genre.description}
                  id={`genre-${genre.id}`}
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
              <li
                key={i}
                className={filter.categories[cat.id] ? "isActive" : ""}
              >
                <label htmlFor={`category-${cat.id}`}>{cat.desc}</label>
                <input
                  type="checkbox"
                  name={cat.description}
                  id={`category-${cat.id}`}
                  checked={filter.categories[cat.id]}
                  onChange={(e) => {
                    handleFilterUpdate(e.target, filter, setFilter);
                  }}
                />
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}
