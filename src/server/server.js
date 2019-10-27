const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));
app.use((req, res, next) => {
  const { url, method } = req;
  console.log(`${method} to ${url}`);
  next();
})

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../../index.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));