const person = {
     name: 'Rick',
     age: 77,
     country: 'US',
   }

var clone1 = JSON.parse(JSON.stringify(person));
var clone2 = JSON.parse(JSON.stringify(person));
var samePerson = person

// console.log(clone1)
// console.log(clone2)
// console.log(samePerson)

person.age = 78
person.country = 'FR'

// console.log(clone1)
// console.log(clone2)
// console.log(samePerson)

