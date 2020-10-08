const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();


const port = 3000;
app.use(cors());
app.use(bodyparser());
app.use('/listing/:itemId', express.static(__dirname + '/public'));


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

// app.get('/', (req, res) => {
//   console.log('HELLO!!')
//   res.end();
// })