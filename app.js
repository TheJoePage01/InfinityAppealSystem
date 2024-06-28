const express = require('express');
const { dirname } = require('path');
const app = express();
const PORT = '3030';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Infinity Appeals started listening on ${PORT}`);
});