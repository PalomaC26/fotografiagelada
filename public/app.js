const doteenv = require('dotenv')

doteenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const db = require('./config/db');

const usuáriosRoutes = require('./routes/usuários');


const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/fotografiagelada/usuários', usuáriosRoutes);


app.get('/', (req,res) => {
    res.send(`Servidor está rodando na porta ${PORT}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});