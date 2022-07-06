// const { networkInterfaces } = require('os');
// const nets = networkInterfaces();

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express()
const port = 80

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
app.use('/manifest.json', express.static(path.join(__dirname, 'client/build/manifest.json')));

const clientURL = '/client/build/index.html';

async function getData() {
  const response = await axios.get('http://192.168.2.36/tar1090/data/aircraft.json');
  return response.data;
}

app.get('/tar1090tables', (req, res) => {
  res.sendFile(clientURL, {'root': './'});
})

app.get('/tar1090tables/data', (req, res) => {
  getData().then(
    (data) => {
      res.json(data);
    }
  )
})



// console.log(test);
