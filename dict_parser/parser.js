const fs = require('fs')
const {saveMany} = require('../server/mongoose/actions/word')
const db = require('../server/mongoose')

console.time("Loading time dict");

function parseFile(fileLocation){
    return new Promise((resolve, reject) => {
      const result = []
      fs.readFileSync(fileLocation)
        .toString()
        .split("\n")
        .forEach(line => {
            let chars = line.split(" ");
            let proArray = /(?<=\[)[\w\s:]+(?=\])/.exec(line) || ["none"];
            let defArray = /(?<=\/).+(?=\/)/.exec(line) || ["none"];
            let word = {
                simp: chars[1],
                trad: chars[0],
                en: defArray[0],
                cnpro: proArray[0],
                twpro: proArray[0]
            }
            result.push(word)
        })
      resolve(result)
    })

}

db.connect()
    .then(() => {
        return parseFile(__dirname + "/cedict.txt")
    })
    .then(words => {
        console.log(words);
        
        return saveMany(words)
    })
    .catch(err => console.log(err))

console.timeEnd("Loading time dict");