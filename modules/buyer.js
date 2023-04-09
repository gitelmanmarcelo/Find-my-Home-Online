const {db} = require('../config/db.js');


const insertBuyer = (buyer) => {

    return db('buyers')
    .insert(buyer)
    .returning('*');
}

module.exports = {
    insertBuyer
}