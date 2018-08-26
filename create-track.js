let db = require('./databse/databse.js');
let prompt = require('prompt-promise');

var responseTrack = [];

function createTrack(){
    prompt('Track name? ')
    .then(function albumname(val) {
        responseTrack.push(val);
        return prompt('Album ID? ')
    })
    .then(function albumID(val) {
        responseTrack.push(val);
        return prompt('Track duration? ');
    })
    .then(function idResponse(val){
        responseTrack.push(val);
        prompt.done();
        db.result(`INSERT INTO track \
        VALUES (Default, '${responseTrack[0]}', '${responseTrack[1]}', '${responseTrack[2]}')`)
        .then (function (result){
            console.log(responseTrack)
            prompt.finish();
        })
        .then (function (index){
            console.log("Track created")
        })
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });
}

createTrack();

module.exports = db;