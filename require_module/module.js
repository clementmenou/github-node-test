// Export whole var of the file
//  const require1 = require('./people');
//
//  console.log(require1.age, require1.people);

// Export specific var of the file
const { people, age } = require('./people');

console.log(people, age)

// Example of predef module 
const os = require('os');

console.log(os.homedir());