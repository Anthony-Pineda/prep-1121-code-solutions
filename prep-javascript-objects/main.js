var person = {
  firstName: 'Bat',
  lastName: 'Man',
  hobby: 'Crimefighting'
};
console.log(person);

var fullname = person.firstName + person.lastName;
console.log("The person's name is:", fullname);

person.job = 'Detective';
console.log("The person's current job is", person.job);

person.previousJob = 'Industrialist';
console.log("The person's previous job is", person.previousJob);

console.log('The complete person object:', person);
