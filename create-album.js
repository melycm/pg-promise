let db = require('./databse/databse.js');
var prompt = require('prompt-promise');
var response = [];


prompt('Album name? ')
.then(function albumname(val) {
    response.push(val);
    return prompt('Album year? ')
})
.then(function albumYearResponse(val) {
    response.push(val);
    return prompt('Album id? ');
    // prompt.done();
})
.then(function idResponse(val){
    response.push(val);
    prompt.done();
})
db.result(`INSERT INTO album \
    VALUES (Default, '${response[1]}', '${response[2]}', '${response[3]}')`)
    .then (function (result){
        console.log(response)
    })
.catch(function rejected(err) {
    console.log('error:', err.stack);
    prompt.finish();
});


module.exports = db;