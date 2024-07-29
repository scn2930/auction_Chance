const express = require('express');
const path = require('path');
//const multer = require('multer');
const app = express();
const PORT = 8000;
const pageRouter = require('./routes/r_page')


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})



