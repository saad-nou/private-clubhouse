const express = require('express');
const path = require('node:path');

const app = express();

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath))

app.use(express.urlencoded({extended:true}));


const loginRouter = require('./routes/loginRouter')
app.use(loginRouter);

const PORT =3000;

app.listen(PORT,()=>console.log("listening on port ",PORT))