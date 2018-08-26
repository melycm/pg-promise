let db = require('./databse/databse.js');
let prompt = require('prompt-promise');

var responseArtist = [];

function createArtist(){
    prompt('Artist name? ')
    .then(function albumname(val) {
        responseArtist.push(val);
        prompt.done();
        db.result(`INSERT INTO artist \
        VALUES (Default, '${responseArtist[0]}')`)
        .then (function (result){
            console.log(responseArtist)
        })
        .then (function (index){
            console.log("Artist created")
        })
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });
}

createArtist();

module.exports = db;