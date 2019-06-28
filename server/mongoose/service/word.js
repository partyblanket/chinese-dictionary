const Word = require('../models/word');

function saveOne(data){
    const word = new Word({data});
    word.save();
    //should be promise
}

async function searchOne (data){
    const result = await Word.findById(data);
    //should be promise
    return result;
}

module.exports = { saveOne, searchOne };