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

let balanceAmount = 100;

app.get("/wallet/:withdrawalAmount", )



app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>");
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
