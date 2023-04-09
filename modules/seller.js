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

const getSeller = (pseller_id) => {
    return db('sellers')
    .select('*')
    .where({seller_id:pseller_id});
}


module.exports = {
    insertSeller,
    loginSeller,
    getSeller
}