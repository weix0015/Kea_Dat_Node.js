// const express = require("express");
// const app = express();

// one liner same result as above
const app = require("express")();


  // route
          // endpoint
            // callback function
            // request, response
app.get("/", (req, res) => {
  res.send({ data: "welcome" });
});

// route
app.get("/secondRoute", (req, res) => {
    res.send({ data: [1, 2, 3, 4] });
});

// assignment create a third route with the endpoint thirdRoute
app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({ data: "You reached the third route" });
});



app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>");
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
