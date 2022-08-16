const express =  require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 4156
const app = new express;

// app.use(express.static(''))

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())





app.listen(PORT,()=>{
    console.log(`app listening to port : ${PORT}`)
});