// const { networkInterfaces } = require('os');
// const nets = networkInterfaces();

const express = require('express');
const path = require('path');

const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

const buildPath = path.normalize(path.join(__dirname, '../client/build'));
app.use(express.static(buildPath));

const clientURL = 'client/build/index.html';
app.get('/tar1090tables', (req, res) => {
  res.sendFile(clientURL, {'root': '../'});
})

app.get('/tar1090tables/data', (req, res) => {
  res.json({"message": "hello"});
})

function fetchData(){
  console.log("fetching data");
}

