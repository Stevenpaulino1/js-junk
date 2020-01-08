fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8f29224d",
      s: searchTerm
    }
  });
  if (response.data.error) {
    return [];
  }
  return response.data.Search;
};

const autocompleteDiv = document.querySelector(".autocomplete");
autocompleteDiv.innerHTML = `
<label>
  <b>
    Search For a Movie
  </b>
</label>
<input class="input"></input>
<div class= "dropdown">
<div class= "dropdown-menu">
<div class="dropdown-content results"></div>
</div>
</div>
`;

const inputEl = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async event => {
  console.log(event.target);
  const movies = await fetchData(event.target.value.trim());
  console.log(movies);

  if (!movies) {
    dropdown.classList.remove("is-active");
    return;
  }

  resultsWrapper.innerHTML = "";

  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const option = document.createElement("a");
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    option.classList.add("dropdown-item");

    option.innerHTML = `
  <img src="${imgSrc}" />
  ${movie.Title}
  `;
    option.addEventListener("click", () => {
      // console.log("AFTER CKICK", inputEl, movie.Title);
      dropdown.classList.remove("is-active");
      inputEl.value = movie.Title;
      onMovieSelect(movie);
    });
    resultsWrapper.appendChild(option);
  }
};

inputEl.addEventListener("input", debounce(onInput));

document.addEventListener("click", event => {
  if (!autocompleteDiv.contains(event.target)) {
    dropdown.classList.remove("is-active");
  }
});

const onMovieSelect = async movie => {
  console.log(movie.imdbID);
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "8f29224d",
      i: movie.imdbID
    }
  });
  console.log(response.data);
  document.querySelector(".summary").innerHTML = movieTemplate(response.data);
};

const movieTemplate = movieDetail => {
  console.log(movieDetail);

  return `
  <article class="media">
    <figure class="media-left">
      <p class="image"> <img src="${movieDetail.Poster}"/></p>
    </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
  </article>
  <article>
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>

`;
};
