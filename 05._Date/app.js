const express = require("express");

const app = express();

// UTC
// console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
// console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
// console.log(Date());

// assignment    create a route /date that returns the date

app.get("/date", (req, res) => {
    res.send({ data: Date() });
});



// assignment    create a route with the endpoint /month 
// assignment    that returns the current month


app.get("/month", (req, res) => {
    const month = new Date().toLocaleDateString("default", { month: "long" });
    res.send({ data: month });
});

const months = ["Jaunary", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

app.get("/month/version1", (req, res) => {
    const monthIndex = new Date().getMonth;
    res.send({ data: months[monthIndex] });
});

app.get("/month/version2", (req, res) => {
    const monthName = new Date.toLocaleDateString("en-us", { month: "long"});
    res.send({ data: monthName });
});


app.get("/month/version3", (req, res) => {
    const monthName = Date().split(" ")[1];
    res.send({ data: monthName });
});


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
app.get("/day", (req, res) => {
    const dayName = days[new Date().getDay() - 1];
    res.send({ data: dayName });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));