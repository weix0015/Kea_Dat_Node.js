const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

// assignment: Create a new route called with the endpoint publicsquare that serves publicSquare.html
app.get("/publicSquare", (req, res) => {
  console.log("Entering the public square");
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
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


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
