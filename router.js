const customers = require('./controllers/customer');
const vehicle = require('./controllers/vehicle');

const routes = {
    '/customers': {
        'GET': customers.list,
        'POST': customers.add,
        'PATCH': customers.update,
        'DELETE': customers.remove
    },
    '/vehicles': {
        'GET':  vehicle.list,
        'POST': vehicle.add,
        'PATCH': vehicle.update,
        'DELETE': vehicle.remove
    }
}

module.exports = (url, method) => {

    if(!routes[url]){
        throw '404';
    }
    if(!routes[url][method]){
        throw '405';
    }

    return routes[url][method]();
}