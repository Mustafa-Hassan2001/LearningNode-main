const fs = require('fs');
const path = require('path');

// have asyn and sync methods
// in sync basically u have to wait for it to finish and 
// in async u can carry on and just get a callback when its finished

//create folder

/* fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder created...');
}); */

/* // create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
    if(err) throw err;
    console.log('file created and written to it ....');

    // appending to file (this is running in the callback)
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' This is appending!', err => {
        if(err) throw err;
        console.log('Text appended...')
    })
}) */

/* // Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log('This is the data\n', data);
});
 */
// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'renamedFile.txt'), err => {
    if(err) throw err;
    console.log('File renamed ....')
});