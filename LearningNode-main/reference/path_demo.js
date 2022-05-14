const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__dirname));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths (useful as windows and linux have / or \ )
console.log(path.join(__dirname, 'test', 'hello.html'));

