const {db} = require('../config/db.js');


const insertSeller = (seller) => {

    return db('sellers')
    .insert(seller)
    .returning('*');
}

const loginSeller = (pusername) => {
    return db('sellers')
    .select('password','seller_id')
    .where({username:pusername});
}


module.exports = {
    insertSeller,
    loginSeller,
}