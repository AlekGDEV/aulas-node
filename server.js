const http = require('http');

const host = 'localhost';
const port = '8888';
const router = require('./router')

const eachRequest = (req, res) => {

    //definindo o tipo de conteudo da resposta para json
    res.setHeader('Content-Type', 'application/json');
    let {url, method} = req;
    let content = '';

    try{
        content = JSON.stringify(router(url, method));
        
    }catch(error){
        res.writeHead(error);
    }

    res.end(content);
    
    //definindo o conteudo da resposta e respondendo pro httpClient

};

module.exports = () => {
    http.createServer(eachRequest).listen(port,host, () => {
        console.log(`API rodando no endereço http://${host}:${port}`)
    });
} 
