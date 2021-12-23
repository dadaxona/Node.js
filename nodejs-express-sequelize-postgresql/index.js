const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('./queries');
const app = express();
const port = 8888;

var corsOptions = {
  origin: "http://localhost:8888"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ msg: 'Node.js, Express, and Postgres API React.js' })
});

app.use('/users', db.getUsers)
app.get('/usersget/:id', db.getUserById)
app.post('/userscreate', db.createUser)
app.put('/usersupdate/:id', db.updateUser)
app.delete('/usersdelete/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})