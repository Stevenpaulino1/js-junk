const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repos/users.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["ewoibnwoeubfewou"]
  })
);

app.get("/signup", (req, res) => {
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

app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  // console.log("EXISTINGUSERS", existingUser);
  if (existingUser) {
    return res.send("Email In Use");
  }

  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }

  const user = await usersRepo.create({ email, password });
  req.session.userId = user.id;

  res.send("account created");
});

app.get("/signout", (req, res) => {
  req.session = null;
  res.send("you logged out");
});
app.get("/signin", (req, res) => {
  res.send(`<div>

    <form method="POST">
    <input name="email" placeholder="email"/>
      <input name="password" placeholder="password"/>
      <button>Sign In</button
    </form>
  </div>
    `);
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email });
  if (!user) {
    return res.send("Email not found");
  }
  if (user.password !== password) {
    return res.send("Invalid password");
  }
  req.session.userId = user.id;
  res.send("You are Signed in");
});

app.listen(3000, () => {
  console.log("listening");
});
