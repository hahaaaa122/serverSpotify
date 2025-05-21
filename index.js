const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Spotify is running. Visit /login to start authentication.');
});

app.get('/login', (req, res) => {
  // xử lý redirect đến Spotify login
});

app.get('/callback', (req, res) => {
  // xử lý callback trả token
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
