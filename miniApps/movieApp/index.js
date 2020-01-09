creatAutoComplete({
  root: document.querySelector(".autocomplete"),
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
              <img src="${imgSrc}" />
              ${movie.Title} ${movie.Year}
            `;
  },
  onOptionSelect(movie) {
    onMovieSelect(movie);
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
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
