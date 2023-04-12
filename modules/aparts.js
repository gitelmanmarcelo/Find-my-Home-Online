const {db} = require('../config/db.js');


const insertApt = (apt) => {

    return db('apartments')
    .insert(apt)
    .returning('*');
}

const searchApt = (condition) => {
    const minPrice = condition.minPrice;
    const maxPrice = condition.maxPrice;
    delete condition.minPrice;
    delete condition.maxPrice;
    const minSize = condition.minSize;
    const maxSize = condition.maxSize;
    delete condition.minSize;
    delete condition.maxSize;
    if (condition.balconies) {
        delete condition.balconies;
        return db('apartments')
        .select('*')
        .where(condition)
        .andWhere('price', '>=', minPrice)
        .andWhere('price', '<=', maxPrice)
        .andWhere('size', '>=', minSize)
        .andWhere('size', '<=', maxSize)
        .andWhere('balconies', '>', 0);
    } else {
        return db('apartments')
        .select('*')
        .where(condition)
        .andWhere('size', '>=', minSize)
        .andWhere('size', '<=', maxSize)
        .andWhere('price', '>=', minPrice)
        .andWhere('price', '<=', maxPrice);
    }
}
const getFavs = (condition) => {
    return db('apartments')
    .select('*')
    .whereIn('apt_id',condition)
}

const searchRaw = (sql_sentence) => {
    return db.raw(sql_sentence);
}


module.exports = {
    insertApt,
    searchApt,
    getFavs,
    searchRaw
}