const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const port = process.env.PORT || 3001;

// Sets up usage for fetch requests
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/api/region/:region/name/:username', (req, res) => {
  
  const apiLink = `https://${req.params.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.username}?api_key=${process.env.RIOT_API_KEY}`

  fetch(apiLink)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(err => res.send(`Error: ${err}`))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})