
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/users/1', (req, res) => {
  res.json(users[0]);
})

app.post('/users', function (req, res) {
  let newUser = {
    "_id": 6,
    "name": "Charlie",
    "occupation": "Bartender"
  }
  users.push(newUser);
  res.json(users);

})

app.put('users/1', (req, res) => {
  users[0].occupation = 'kung fu fighter';
  res.json(users)
})

app.delete('users/1', function (req, res) {
  res.send('Deleted')
})

/* END - create routes here */


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))