// let rating = Math.ceil(Math.random() * 10);
//
// if (rating <= 4) {
//   console.log(`Your current rating is ${rating}, Needs improvement`);
// } else if (rating >= 5 && rating <= 7) {
//   console.log(`Your current rating is ${rating}, keep up the good work`);
// }
// return 0;

// let userScore = Math.ceil(Math.random() * 100);
// let highScore = Math.ceil(Math.random() * 100);
//
// if (userScore >= highScore) {
//   console.log(`${userScore} ${highScore} You set a new high score`);
// }

// let userLoggedIn;
//
// if (!userLoggedIn) {
//   console.log("log in nigga");
// }
// let day = 10;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//
//   default:
//     console.log("invalido");
// }

// let emoji = "none";
// switch (emoji) {
//   case "mouth":
//   case "lips":
//     console.log("red");
//     break;
//
//   case "finger":
//   case "face":
//     console.log("yellow");
//     break;
//
//   default:
//     console.log("invalid");
// }

// let status = "offline";
//
// status === "online" ? (status = "green") : (status = " red");
//
// console.log(status);

// const animal = [["doe", "buck"], ["ewe", "ram"], ["peahen", "peacock"]];

// const fitbitData = {
//   totalSteps: 45894,
//   totalMiles: 45832495,
//   avfCalorie: 435897,
//   45: "forty-five"
// };

// const student = {
//   firstName: "David",
//   lastName: "China",
//   strengths: ["music", "art"],
//   exams: { music: 65, art: 55 }
// };

// for (let i = 0; i < 10; i) {
//   console.log(i);
// }

// let animals = ["steven", "paulino", "margery"];
//
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// let examScores = [99, 55, 66, 100, 65, 86, 42];
//
// let total = 0;
// let average = 0;
// for (let i = 0; i < examScores.length; i++) {
//   console.log((total += examScores[i]), "average", total / examScores.length);
// }

// const myStudents = [
//   {
//     firstName: "steven",
//     grade: 86
//   },
//   {
//     firstName: "john",
//     grade: 80
//   },
//   {
//     firstName: "doe",
//     grade: 92
//   },
//   {
//     firstName: "randoe",
//     grade: 86
//   }
// ];
//
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(
//     (total += myStudents[i].grade),
//     "average:",
//     total / myStudents.length
//   );
// }

// const word = "stressed";
//
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// function isPurple(color) {
//   if (color === "purple") {
//     return true;
//   }
//   return false;
// }

// function isValidPassword(password, username) {
//   return (
//     password.length >= 8 &&
//     password.includes(" ") &&
//     password.includes(username)
//   );
// }
// let arrayOfNums = [1, 2, 3, 4, 5];
// let total = 0;
// function findAvg(arrayOfNums) {
//   for (let i = 0; i < arrayOfNums.length; i++) {
//     total += arrayOfNums[i];
//   }
//   console.log(total / arrayOfNums.length);
// }

// let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k", "a"];
// let suit = ["clubs", "spades", "hearts", "diamonds"];
// function getRandom() {
//   return Math.floor(Math.random());
// }
//
// function getCard() {
//   let value = cardValue[getRandom() * cardValue.length];
//   let cardSuit = suit[getRandom() * suit.length];
//   let obj = { value, cardSuit };
//   return obj;
// }

// function makeBetweenFunc(x, y) {
//   return function(num) {
//     if (num >= x && num <= y) return true;
//   };
// }

// function multiplyBy(num) {
//   return function(x) {
//     return x * num;
//   };
// }
//
// function divideBy(num) {
//   return function(x) {
//     return x / num;
//   };
// }

let numbersArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
//
// numbersArr.forEach(n => {
//   console.log(n * n);
// });

// const myStudents = [
//   {
//     firstName: "steven",
//     grade: 86
//   },
//   {
//     firstName: "john",
//     grade: 80
//   },
//   {
//     firstName: "doe",
//     grade: 92
//   },
//   {
//     firstName: "randoe",
//     grade: 85
//   }
// ];

// myStudents.forEach(function(student) {
//   console.log(student.firstName, student.grade);
// });

// const numbers = [20, 21, 22, 23, 24, 25, 26];

// const newforeach = numbers.map(function(num) {
//   return num * num;
// });
//
// const mapforeach = numbers.forEach(function(num) {
//   return num * num;
// });
//
// let numArr = numbers.map(function(num) {
//   return {
//     value: num,
//     isEven: num % 2 === 0
//   };
// });
//
// const words = ["asap", "byob", "rsvp", "diy"];
//
// const finishedWords = words.map(function(word) {
//   return word
//     .toUpperCase()
//     .split("")
//     .join(".");
// });

// const parityList = numbers.map(num => {
//   if (num % 2 === 0) return true;
//   return false;
// });

// const parityList = numbers.map(num => (num % 2 === 0 ? "even" : "odd"));

// let studentSteven = myStudents.find(student => {
//   return student.firstName === "steven";
// });

// let oddGrade = myStudents.find(student => student.grade % 2 === 1);

numbersArr.filter(num => {
  return num % 2 === 1;
});

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"]
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"]
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"]
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"]
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"]
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"]
  }
];

// const fictionBooks = books.filter(
//   b =>
//     b.genres.includes("fiction") ||
//     b.genres.includes("epic") ||
//     b.genres.includes("fantasy")
// );
// const shortBooks = books.filter(b => b.genres.includes("short stories"));
//
// higherThanfourpointthree = books.filter(b => b.rating > 4.3);

const higherThanThree = books.every(b => b.rating > 3.5);

const twoAuthors = books.some(b => b.authors.length === 2);

const myStudents = [
  {
    firstName: "steven",
    grade: 86,
    country: "kenya"
  },
  {
    firstName: "john",
    grade: 80,
    country: "usa"
  },
  {
    firstName: "doe",
    grade: 92,
    country: "ethiopia"
  },
  {
    firstName: "randoe",
    grade: 85,
    country: "china"
  }
];

// const numArrTotal = numbersArr.reduce((acc, curr) => acc + curr);
//
let arrOfNumbers = [1, 2, 3, 4, 5];
//
// function reducer(arr) {
//   let value = 0;
//
//   for (let i = 1; i < arr.length; i++) {
//     if (value === 0) {
//       value = arr[0] + arr[i];
//     } else {
//       value = value + arr[i];
//     }
//   }
//   return value;
// }

// myStudents.reduce((max, curr) => {
//   console.log(max.grade, curr.grade);
//   if (max.grade > curr.grade) return max;
// });

// arrOfNumbers.reduce(function(max, curr) {
//   if (max > curr) {
//     return max;
//   }
// });

const votes = ["y", "no", "y", "y", "no", "y", "y", "no", "y", "no"];

// const results = votes.reduce((tally, curr) => {
//   if (tally[curr]) {
//     tally[curr]++;
//   } else {
//     tally[curr] = 1;
//   }
//   return tally;
// }, {});

// const results = votes.reduce((tally, curr) => {
//   tally[curr] = (tally[curr] || 0) + 1;
//   return tally;
// }, {});
//
// const greet = (person = "person", greeting) => {
//   console.log(`${greeting} there, ${person}`);
// };
//
// const girls = ["andrea", "daisy", "shylene", "valerie"];
//
// const guys = ["luis", "brian", "steven", "jose"];
//
// const everybody = [...girls, ...guys];
//
// const [gold, silver, bronze] = everybody;
//
// const [firstPlace, ...others] = everybody;
//
// function greeter({ firstName, country }) {
//   return `Hi, ${firstName} from ${country}`;
// }
//
// function sayHi() {
//   console.log(this);
// }
//
// const person = {
//   firstName: "Steven",
//   lastName: "paulino"
// };
//
// const annoyer = {
//   phrases: ["you suck", "yolo", "can you not ", "cray cray"],
//   pickPhrase() {
//     const { phrases } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start() {
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase());
//     }, 3000);
//   },
//   stop() {
//     clearInterval(this.timerId);
//     console.log("yay its over");
//   }
// };
