const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

// assignment: Create a new route called with the endpoint publicsquare that serves publicSquare.html
app.get("/publicSquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
