const {db} = require('../config/db.js');


const insertApt = (apt) => {

    return db('apartments')
    .insert(apt)
    .returning('*');
}

const searchApt = (condition) => {
    return db('apartments')
    .select('*')
    .where(condition);
}

const searchRaw = (sql_sentence) => {
    return db.raw(sql_sentence);
}


module.exports = {
    insertApt,
    searchApt,
    searchRaw
}