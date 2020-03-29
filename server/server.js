const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const trackRouter = require('./routes/track.router');
const tracksRouter = require('./routes/tracks.router');


server.use(cors());

server.use('/track', trackRouter);

server.use('/tracks', tracksRouter);

server.use('/SendTrack', express.static(path.join(__dirname, '/build')));
server.use('/SendTrack/static', express.static(
    path.join(__dirname, '/build/static')));

server.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'build/index.html'));
});

if (module === require.main) {
  // [START server]
  const serv = server.listen(process.env.PORT || 8080, () => {
    const port = serv.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = server;
