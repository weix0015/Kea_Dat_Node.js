const express = require("express");
const app = express();

const drinks = [
  { id: 1, name: "soda", price: 20 },
  { id: 2, name: "cola", price: 20 }
];

app.get("/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/drinks/:id", (req, res) => {
  const id = Number(req.params.id);

  const drink = drinks.find(item => item.id === id); 
  
  if (!drink) {
    return res.status(404).send("Drink not found");
  }
  
  res.send(drink);
});

app.listen(8080);