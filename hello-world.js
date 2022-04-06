const sayHello = name => console.log(`Hello ${name}`)

sayHello('Alexa')

// THE GOALS OF FUNCTIONAL PROGRAMMING
// OOP technique creates a code full of bugs
// easy to test and modify code
// different way to organize code
// OOP - we think about objects and relations they have between each other -->
// we can mess up our thought process - interfaces, subclasses, constructors, public
// and private and protected data, accesors, etc.
// FUNCTIONAL --> it brings mathematical functions into programs

// IMPERATIVE vs DECLARATIVE 
// OOP --> imperative
// FUNCTIONAL --> declarative
// DECLARATIVE --> functional programming puts focus on WHAT THINGS ARE and NOT HOW TO GET THEM

// CORE CONCEPTS OF FUNCTIONAL PROGRAMMING
// IMMUTABILITY
// SEPARATING FUNCTIONS AND DATA
// FIRST-CLASS FUNCTIONS

// How does Imperative and Declarative programming works?

// IMPERATIVE: 
// 1. Set x equal to zero
// 2. Add the first number in the array to x.
// 3. Repeat step 2 for the rest of the numbers in the array.
// 4. Divide x by the length of the array? 

// const arr = [1, 2, 3, 4]
// x = 0 
// x = 0 + 1 
// x = 0 + 1 + 2 + 3 + 4
// x = 10 / 4

// DECLARATIVE 
// X is the sum of all the numbers in the array, 
// divided by the length of the array.

// IMMUTABILITY 

// OOP -> you can change the value of the variable within a program
// FUNCTIONAL PROGRAMMING --> this is not allowed.
// Most of variables in functional programming are CONSTANTS - CONST keyword, not LET or VAR.
// OOP --> x = 3 --> X is a container for 3 --> mutable 
// F --> we don't assign --> x = 3 --> X is not container, X IS 3 --> immutable

// Update salary of an employee

// OOP --> we change salary directly
var employee1 = new Employee('Alexa', 50000)
  new Employee('John', 6000)

  employee1.raiseSalary(1000)

// F --> we change salary by defying a new constant
// that represents the updated data 
const employee1 = {
    name: 'John',
    salary: 6000
};

const updatedEmployee1= {
    name: employee1.name,
    salary: employee1.salary + 1000,
}

// IMMUTABILITY ADVANTAGES:
// no state change 
// easier testing and debugging 
// we start from immutable set of data as a single source of truth
// and then we add functions to combine this data and transform it into an information.
// original data is INTACT! --> you can't change it!
