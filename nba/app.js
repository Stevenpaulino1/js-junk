const bullsGames = [
  {
    awayTeam: {
      team: "Chicago Bulls",
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Chicago Bulls",
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Chicago Bulls",
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: "Chicago Bulls",
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: "Chicago Bulls",
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: "Chicago Bulls",
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: "Chicago Bulls",
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false
    }
  }
];

function makeTable(data, targetTeam) {
  const ul = document.createElement("ul");
  data.forEach((game, i) => {
    const li = document.createElement("li");
    li.innerHTML = getScoreLine(game);
    li.classList.add(getWinningTeam(game, targetTeam) ? "win" : "loss");
    ul.append(li);
  });
  return ul;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: aTeam, points: aPoints } = awayTeam;
  const { team: hTeam, points: hPoints, isWinner } = homeTeam;

  const teamNames = ` ${aTeam} @ ${hTeam}`;
  let score;
  if (aPoints > hPoints) {
    score = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    score = `${aPoints} - <b>${hPoints}</b>`;
  }

  return teamNames + " " + score;
};

const getWinningTeam = ({ homeTeam, awayTeam }, targetTeam) => {
  target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const sectionGs = document.querySelector("#gs");
const sectionHs = document.querySelector("#hs");
const chart1 = makeTable(bullsGames, "Houston");
const chart2 = makeTable(bullsGames, "Golden State");
sectionGs.append(chart1);
sectionHs.append(chart2);
