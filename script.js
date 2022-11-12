const EXPRESS = require('express');
const APP = EXPRESS();
const ROUTER = require('./routes/api')
const PORT = 80;

APP.use('/api', ROUTER)// as requisiçoes conhecem o modulo REUTER na rota '/api'
APP.use('/', EXPRESS.static('./client'))// as requisiçoes conhecem a pagina estatica na raiz '/'

APP.listen(PORT, ()=>{
    console.log('server running with sucessfull!');
})