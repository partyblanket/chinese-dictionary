
const Word = require('../models/word');

function saveOne(singleWordObject){
    const word = new Word(singleWordObject);
    word.save((err, docs) => {
        if (err) return console.log(err);
        return docs
    });
}

function saveMany(wordObjectArray){
    const documentArray = wordObjectArray.map(el => new Word(el));
    Word.insertMany(documentArray,(err, docs) => {
        console.log(err, docs);
        
    });
}

function searchMany (searchObject){
    return new Promise((resolve, reject) => {
        Word.find({en: {$regex: searchObject, $options: 'i'}}).limit(20).exec((err, docs) => {
            if (err) reject(err);
            resolve(docs)
        })
    })
    // const searchObject = { name: /john/i }
    // const fields = "simp trad"

    
    
}

module.exports = { saveOne, searchMany, saveMany };