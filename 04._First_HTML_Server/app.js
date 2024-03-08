const express = require("express");

const app = express();

app.use(express.static("public"));

// const helicopterFactoryFile = require("./util/helicopterFactory.js");
// console.log(helicopterFactoryFile.helicopterFactory());

const  { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

// assignment: Create a new route called with the endpoint publicsquare that serves publicSquare.html
app.get("/publicSquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
  res.send({ data: "You found it!" });
});

app.get("/secretpassphrase", (req, res) => {
// task: Get the passphrase from the query string and compare it below
  if (req.query.passphrase !== "SesameOpenUp") {
    res.status(400).send({ data: "Wrong passphrase "});
  } else {
    res.redirect("/treasuretrove");
  }
});

// take a name from the query string and greet the person if you know them
// task otherwise say, "hello stranger"


const knownNames = ["Wei", "Mikkel"];

app.get("/greeting", (req, res) => {
  const providedName = req.params.name;
  if (knownNames.includes(providedName)) {
    res.send({ data: `Hello ${providedName}` })
  } else {
    res.send({ data: "Hello stranger!" })
  }
});

app.get("/knownpeople", (req, res) => {
  res.send({ data: knownNames.length });
});

/*
const names = ["wei", "mikkel"]

app.get("/greeting/:name", (req, res) => {
  const value = req.params.name;
  if (value === names[0] || value === names[1]) {
    res.send({ data: "Hello" });
  } else {
    res.send({ data: "hello stranger"});
  }
});
*/

app.get("/proxy", (req, res) => {
  // fetch("https://www.google.com")
  // .then((response) => response.text())
  // .then((result) => res.send(result));
  fetch("https://www.google.com")
  .then((response) => response.arrayBuffer())
  .then(buffer => {
    const decoder = new TextDecoder("iso-8859-1");
    const text = decoder.decode(buffer);
    res.send(text);
  });
  /* assignment: Request the https://www.google.com home page and serve it as a response */
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
