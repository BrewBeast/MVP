const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/save', (req, res) => {
//   console.log(req.body);
  db.save(req.body)
  res.end('Success');
});

app.get('/saved', (req, res) => {
  db.all()
    .then((data) => {
        const things = data;
        // console.log(data);
        res.send(things);
    })
})


app.listen(port, () => console.log('live on : ', port));
