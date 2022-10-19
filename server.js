const http = require('http');

const host = 'localhost';
const port = '8888';
const router = require('./router')

const eachRequest = (res, req) => {

    //definindo o tipo de conteudo da resposta para json
    res.setHeader('Content-Type', 'application/json');
    let {url, method} = req;

    //definindo o conteudo da resposta e respondendo pro httpClient
    res.end(
        JSON.stringify(router(url, method))
    );
};

module.exports = () => {
    http.createServer(eachRequest).listen(port,host, () => {
        console.log(`API rodando no endereço http://${host}:${port}`)
    });
} 
