const people = ['John', 'Peter', 'Mary'];

const age = [30, 42, 34];

console.log(people);

// Export 1 var
//module.exports = people;

// Export multiple var 
module.exports = {
    people : people,
    age : age
}