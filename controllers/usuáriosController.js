const db = require('../config/db');
//toda usuários
const getAllUsuários = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if(err){
            console.error('Erro ao obter usuários:', err);
            res.status(500).send('Erro ao obter usuários');
            return;
        }
        res.json(results);
    });
};
 

module.exports = {
getAllUsuários,
};