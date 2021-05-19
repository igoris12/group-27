// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     alert('Hi! I\'m ' + obj.name + '.');
//   };
//   return obj;
// }

// const salva = Person('Salva');
// salva.name;
// salva.greeting();


// function Person(name) {
//  this.name = name;
//   console.log(name);
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
// }

// let person1 = new Person('Bob');
// person1.name
// person1.greeting()

// let person2 = new Person('Sarah');
// person2.name
// person2.greeting()

// let akaska = new Person('akkasta')
// akaska.name
// akaska.greeting()


function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

person1.greeting()
person1.bio()