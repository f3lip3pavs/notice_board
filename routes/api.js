const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const BODY_PARSER = require('body-parser');
const POST = require('../model/model')

ROUTER.get('/all', (req, res)=>{// e se hovessem 2 requisiçoes diferentes na mesma rota? o frontend chamaria essa rota e ela iria executar os scripts de cada requisição 
    res.json(JSON.stringify(POST.getAll()))
})

ROUTER.post('/new', BODY_PARSER.json(), (req, res) => {// BODY_PARSER.json() permite a utilização/manipulação do elemento body
    let title = req.body.title;
    let description = req.body.description;

    POST.newPost(title, description)

    res.send('Enviado com secesso!');
})

module.exports = ROUTER;
