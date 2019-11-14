const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000


const { users } = require('./state')

let counter = users.length + 1;

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
  res.json(users)
})


app.get('/users/1', (req, res) => {
  res.json(users[0])
})

app.post('/users', (req, res) => {
  let newUser = {
    _id: 6,
    name: "Charlie",
    occupation: "Bartender",
  }
  users.push(newUser);
  res.json(users);

})

app.put("/users/1", (req, res) => {
  users[0].occupation = "kung fu fighter";
  res.json(users[0]);
});

app.delete("/users/1", (req, res) => {
  users[0]._id = null;
  res.send("DELETED");
});

app.post("/users", (req, res) => {
  let hardCode = {
    _id: counter,
    name: "Teddy",
    occupation: "KBG Gangster",
  };
  users.push(hardCode);
  res.json(hardCode);
  console.log(req.body)


})





/* END - create routes here */

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))