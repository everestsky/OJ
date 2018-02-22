const express = require('express')
const app = express()
const path = require('path');

// connect mongoDb
const mongoose = require('mongoose');
mongoose.connect('mongodb://test-user:test2017@ds245518.mlab.com:45518/cs503-oj');


const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/')});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))