const express = require('express');
const app = express();
const PORT = 3000;
app.get('/src/Administracao.html', function (req, res) {
    res.redirect('/src/Home.html');
    console.log("foi no administracao");
    
});

app.get('/src/adm.html', function (req, res) {
    //res.send('Olá mundo ADM!');
    console.log("Testeadm");
    
});

app.get('/src/Home.html', function (req,res){
    console.log('HOME');
});

app.listen(PORT, function() {
    console.log(`O servidor está na porta ${PORT}!`);
});