const express = require("express");
const bodyParser = require("body-parser");

const usersRepo = require("./repos/users.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
      <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <input name="passwordConfirmation" placeholder="password confirmation"/>
        <button>Sign Up</button
      </form>
    </div>
    `);
});

// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", data => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };

app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  // console.log("EXISTINGUSERS", existingUser);
  if (existingUser) {
    return res.send("Email In Use");
  }

  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }
  res.send("account created");
});

app.listen(3000, () => {
  console.log("listening");
});
