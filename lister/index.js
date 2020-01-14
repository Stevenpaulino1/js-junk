#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const path = require("path");

// const lstat = util.promisify(fs.lstat);

const targetDir = process.argv[2] || process.cwd();

const { lstat } = fs.promises;
fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }
  //
  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // }

  const statPromises = filenames.map(filename => {
    // console.log("WHAT", targetDir, filename);
    return lstat(path.join(targetDir, filename));
  });
  const allStats = await Promise.all(statPromises);
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.gray(filenames[index]));
    } else {
      console.log(chalk.bold(filenames[index]));
    }
  }
});

// const lstat = filename => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(stats);
//     });
//   });
// };
