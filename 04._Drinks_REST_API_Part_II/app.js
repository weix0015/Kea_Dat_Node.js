const express = require("express");
const app = express();
app.use(express.json());

let drinks = [
  { id: 1, name: "soda", price: 20 },
  { id: 2, name: "cola", price: 20 }
];

app.get("/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/drinks/:id", (req, res) => {
  const id = Number(req.params.id);

  const drink = drinks.find(drink => drink.id === id); 
  
  if (!drink) {
    return res.status(404).send("Drink not found");
  }
  
  res.send(drink);
});

app.post("/drinks", (req, res) => {
    const { name, price} = req.body;
    if (!name || !price) {
        return res.status(400).send("Name and price are required");
    }
    let id;
    if (drinks.length > 0) {
        id = drinks[drinks.length - 1].id + 1;
    } else {
        id = 1;
    }
    const newDrink = { id, name, price };
    drinks.push(newDrink);
    res.status(201).send(newDrink);
});

app.put("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const drinkIndex = drinks.findIndex(drink => drink.id === id);
    if (drinkIndex === -1) {
        return res.status(404).send("Drink not found");
    }
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send("Name and price are required");
    }
    drinks[drinkIndex] = { id, name, price };
    res.send(drinks[drinkIndex]);
});

app.delete("/drinks/:id", (req, res) => {
    const id = Number(req.params.id);
    const initialLength = drinks.length;
    drinks = drinks.filter(drink => drink.id !== id);
    if (drinks.length === initialLength) {
        return res.status(404).send("Drink not found");
    }
    res.sendStatus(204);
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));