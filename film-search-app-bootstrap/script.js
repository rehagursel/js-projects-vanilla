const button = document.querySelector("button");
const search = document.querySelector("#search");
const container = document.querySelector(".container-xl");

let newMovie;

let displyCol = document.createElement("div");
displyCol.className =
  "row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xlg-6 g-2 g-lg-3";
container.appendChild(displyCol);

function deleteElements() {
  displyCol.remove();
}

const addNewElements = () => {
  displyCol = document.createElement("div");
  displyCol.className =
    "row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-2 g-lg-3";
  container.appendChild(displyCol);
  for (let i = 0; i < newMovie.length; i++) {
    divCol = document.createElement("div");
    divCol.className = "col";
    displyCol.appendChild(divCol);
    let divInCol = document.createElement("div");
    divInCol.className = "mt-1 p-3 d-flex flex-column";
    divCol.appendChild(divInCol);
    const movieImg = document.createElement("img");
    movieImg.className = "imgMovie";
    divInCol.appendChild(movieImg);
    const movieName = document.createElement("p");
    movieName.className = "name text-center";
    divInCol.appendChild(movieName);
    const movieGenres = document.createElement("p");
    movieGenres.className = "genres text-center";
    divInCol.appendChild(movieGenres);
    movieImg.src = newMovie[i].show.image.medium;
    movieName.innerText = newMovie[i].show.name;
    if (newMovie[i].show.genres.length < 1) {
      movieGenres.innerText = `-`;
    } else {
      movieGenres.innerText = `(${newMovie[i].show.genres})`;
    }
  }
};

const filmRequest = async () => {
  let q = search.value;
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${q}/`,
    config
  );
  return res.data;
};

search.addEventListener("change", async () => {
  newMovie = await filmRequest();
  console.log("test3", newMovie);
  deleteElements();
  addNewElements();
});
