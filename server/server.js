const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`app is live on ${port}`)
})