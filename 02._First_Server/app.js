const express = require("express");
const app = express();

// one liner same result as above
// const app = require("express")();

app.use(express.json());


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


/* assignment
start with the balance of 100 in the wallet
every time a client calls this route the value of paymentOut should be subtracted from the balance
if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds"

*/

let balance = 100;

app.get("/wallet/:withdrawalAmount", (req, res) => {

  const withdrawalAmount = Number(req.params.withdrawalAmount);
   
  if (!withdrawalAmount) res.send({ data: "You have submitted an incorrect amount"});
   
  if (balance - withdrawalAmount < 0) {
    res.send({ data: "Sorry, not enough funds." });
  } else {
    balance -= withdrawalAmount;

    res.send({ data: `Your new balance is ${balance}` });
  }

});

// task: create a route called fillUpWallet that 
// task: allows a client to fill up the wallet with a specific amount

app.get("/fillUpWallet/:depositAmount", (req, res) => {
  const depositAmount = Number(req.params.depositAmount);

  if (!depositAmount) res.send({ data: "You have submitted an incorrect amount" });
  else {
    balance += depositAmount;
    res.send({ data: `Your new balance is ${balance}` });
  }
});

// /saySomethingNiceAboutMe/greeting?handsome=very&tall=indeed&cool=always
app.get("/saySomethingNiceAboutMe/:greeting", (req, res) => {
  console.log(req.params.greeting);
  console.log(req.query);
  // task: if the client defines handsome as very then response with "thanks cool cat"
  // task: otherwise say "ain't no thang"
  if (req.query.handsome !== "very") {
    return res.send({ data: "Ain't no thang" });
  }
  return res.send({ data: "Thanks cool cat" });
});


app.post("/postman", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


app.get("/page", (req, res) => {
  res.send("<h1>Welcome to my page</h1>");
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
