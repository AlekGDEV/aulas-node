module.exports = (url, method) => {
    
    if(url.indexOf('/customers' >= 0)){
        return 'Controller do cliente'
    }

    if(url.indexOf('/vehicles')){
        return 'Controller do veiculo';
    }
}