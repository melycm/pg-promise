let db = require('./databse/databse.js');
let prompt = require('prompt-promise');

response = [];

function createAlbum(){
    prompt('Album name? ')
    .then(function albumname(val) {
        response.push(val);
        return prompt('Album year? ')
    })
    .then(function albumYearResponse(val) {
        response.push(val);
        return prompt('Album id? ');
    })
    .then(function idResponse(val){
        response.push(val);
        prompt.done();
        db.result(`INSERT INTO album \
        VALUES (Default, '${response[0]}', '${response[1]}', '${response[2]}')`)
        .then (function (result){
            console.log(response)
        })
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });
}

createAlbum();

module.exports = db;