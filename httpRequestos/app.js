//requesting XHR, Fetch, Axios

// function reqListener() {
//   console.log(this.responseText);
// }
//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function() {
//   const data = JSON.parse(this.response);
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
// });
// firstReq.addEventListener("error", () => {
//   console.log("no works");
// });
//
// firstReq.open("GET", "https://swapi.co/api/planets/");
// firstReq.send();
// console.log("req sent");

// const checkStatusThenParse = res => {
//   if (!res.ok) throw new Error(`status code error: ${res.status}`);
//   return res.json();
// };
//
// const printPlanets = data => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };
//
// const fetchNextBatch = url => {
//   return fetch(url);
// };
//
// fetch("https://swapi.co/api/planets/")
//   .then(checkStatusThenParse)
//   .then(printPlanets)
//   .then(fetchNextBatch)
//   .then(checkStatusThenParse)
//   .then(printPlanets)
//   .catch(err => {
//     console.log(`Something went wrong ${err}`);
//   });

// fetchNextBatch = (url = "https://swapi.co/api/planets/") => {
//   console.log("in fetch", url);
//   return axios.get(url);
// };
//
// printPlanets = ({ data }) => {
//   console.log("in print");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   console.log("resolving");
//   return Promise.resolve(data.next);
// };
//
// fetchNextBatch()
//   .then(printPlanets)
//   .then(fetchNextBatch)
//   .then(printPlanets)
//   .catch(err => {
//     console.log(err);
//   });

function greet() {
  return "hello";
}

async function greetOne() {
  return "async hello";
}

async function add(x, y) {
  return x + y;
}

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject(console.log(err));
    }
    resolve(x + y);
  });
}

greet();
greetOne();

//Sequential requests
// async function getPoke() {
//   const poke1 = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await fetch("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await fetch("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1);
//   console.log(poke2);
//   console.log(poke3);
// }

//parallel
async function getPoke() {
  const poke1 = fetch("https://pokeapi.co/api/v2/pokemon/1");
  const poke2 = fetch("https://pokeapi.co/api/v2/pokemon/2");
  const poke3 = fetch("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([poke1, poke2, poke3]);
  console.log(results);
}
getPoke();
