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

// SEPARATION OF DATA AND FUNCTIONS

// array of data objects
const data = [
    {
        id: 1,
        name: "Alexa",
        address: "123 Easy Street",
        ITIN: 123444,
    }
]

// F - data is represented by arrays of objects
// OOP - data is usually wrapped up inside objects as member 
// variables, and the only way we can access it is using an object's methods. 


// F
const carsArray = [...]
const newCars = filter(cars, 2018)

// OOP
class CarList {
    ...
    findNewCars(sinceYear) {
        ...
    }
}

//  In order to operate on given data, the data must be passed as arguments to 
// the function instead of using the this keyword as in object-oriented programming. 
// And because of the rule of immutability, they should never make changes to any of 
// the data they touch. They only return a modified copy of that data.

// OOP - why we keep data and functions together?
// The main reason that it's useful to keep data and functions together in 
// the same object is that this allows us to interact with the member variables
//  of an object without touching them directly.
// WHAT'S WRONG WITH TOUCHING VARIABLES DIRECTLY?
// DIRECT ACCESS TO VARIABLES --> programmers will change them in the way they are not supposed to
// variables can be made private in JS - it is done by adding an underscore before the variables -->
// they can be only accesed by functions now

class Cat {
    constructor(name, gender) {
        this._name = name
        this._gender = gender
        this._initials = `${name.charAt(0)}${lastName.charAt(0)}`
    }

    setName(newName) {
        this._firstName = newName
        this._initials = `${this._name.charAt(0)}${this._gender.charAt(0)}`
    }
}

// F - programmers can't ALTER data in unwanted ways
// it is against immutability - the data remains a constant source of truth
// if we want to change some's name, we define a new constant that represents the updated data
// Then we use this updated constant in all our future calculations, knowing exactly what data it represents

const createCat = (name, gender) => ({
    name,
    gender,
    initials: `${name.charAt(0)}${gender.charAt(0)}`
})
const cat1 = createCat('Kion', 'male')
const updatedCat1 = createCat('Nala', cat1.gender)


// FIRST CLASS FUNCTIONS
// Creating an array of functions or passing functions as arguments to other functions, 
// returning functions from other functions. However, in functional programming -
// it's in fact a source of tremendous flexibility. --> THESE ARE FIRST CLASS FUNCTIONS
// it allows us to treat functions in a very similar way to how we normally treat other values such as numbers, strings, and objects.
// world of possibilities in terms of software design.
// greatly increases our opportunities for code re-use.

// In object-oriented programming, since functions and data are both defined within
// the same class, they tend to be tightly coupled. In other words, the functions 
// inside a given class usually reference the data that they operate on directly, 
// as is the case here with this.name. In other words, you generally can't 
// take a given function and remove it from the class it's in and still have it 
// work on its own. In functional programming on the other hand, we designed our 
// functions specifically so that they work in isolation. All of the data that a 
// function needs to operate on is passed in through the arguments, and the only 
// thing that will change the output of the function is a change in the arguments. 
// In other words, functions aren't influenced by any kind of internal or external 
// state. There's a name for this kind of function. We call them pure functions, 
// and in functional programming, we try our best to make every single one of our 
// functions pure. And this is what we mean when we say that we want to keep data 
// and functions separate.

// ENSURING IMMUTABILITY = ESLint

// correct
const x = 5

// incorrect
x = 6

const numbers = [1,2,3,4,5]
// we can't redefine the array in this way
numbers = ['hello']
// but we can in this way - JS WON'T COMPLAIN ABOUT IT! --> WE MUTATE ACCIDENTALY NOW!
numbers[0] = 100 

const person = {
    name: "Alexa",
    age: 43
}
// we can't redefine object in this way
person = { name: "Bob" }
// but we can in this way
person.name = "Bob"

// ESLint --> prevents from accidental mutation!
// ESLint --> install VS code plugin IMMUTABLE

