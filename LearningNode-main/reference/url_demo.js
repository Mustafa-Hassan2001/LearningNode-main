const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //same as above

// Host (root domain)
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname); // doesnt include port

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object 
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));