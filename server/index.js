const dotenv = require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const controllers = require('./controllers/index.js');
// import { https } from 'https';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']
  })
); // 이거 왜 있는거지? 언제 사용되는걸까?

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

const HTTPS_PORT = process.env.HTTPS_PORT || 80;
// if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
//   const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
//   const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
//   const credentials = { key: privateKey, cert: certificate };

//   server = https.createServer(credentials, app);
//   server.listen(HTTPS_PORT, () => console.log(`https server running on port ${HTTPS_PORT}`));
// } else {
const server = app.listen(HTTPS_PORT, () => console.log(`🚀 http server running on port ${HTTPS_PORT}`));
// }

module.exports = server;
