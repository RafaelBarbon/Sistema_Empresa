const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', function (req, res) {
    res.send('Olá mundo!');
});
app.listen(PORT, function() {
    console.log(`O servidor está escutando na porta ${PORT}!`);
});