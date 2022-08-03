 // This is some javascript code
//  console.log("Hello world!")

//  let name = "Mosh";  //using "name" as a variable name is now deprecated, meaning it'll still work but its use is discouraged
//  console.log(name);
//--------------------------------------------------------------------------------------------------------------------------------
       // Cannot be a reserved keyword
      // Should be meaningful
     // Cannot start with a number(1name)
    // Cannot contain a space or hyphen (-)
   // Are case-sensitive
//--------------------------------------------------------------------------------------------------------------------------------
  // How to declare multiple variables( best practice)
 //let firstName, lastName, middleName; //not this

//  let firstName = "Clay"; 
//  let lastName = "Baruch";    //like these
//  let middleName = "Carney"; //make sure to end line in semi-colon

 
// Best Practice let vs. const: Use const by default when you don't need to reassign a variable, otherwise use let. 


// Using let------------------------------------------------------------------------------------------------------------------

//  let interestRate = 0.3;
//  interestRate = 1; // This is reassigning the value of interestRate from 0.3 to 1, and will appear so in the console
//  console.log(interestRate);


// Using const-----------------------------------------------------------------------------------------------------------------

//  const percentageRate = 0.4;
//  percentageRate = 2.5;  // You cannot reassign a const and so this will throw an error in the console
//  console.log(percentageRate);
//------------------------------------------------------------------------------------------------------------------------------


                    // Primitive Types
                   // Strings
                  // Numbers
                 // Boolean
                // undefined
               // null

// let name = "Mosh"; // String Literal
// let age = 30; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName; // let firstName = undefined;
// let lastName = null; // Can be used when you want to clear the value of a variable

//--------------------------------------------------------------------------------------------------

//            // Reference Types
//           // Object
//          // Array
//         // Function


// Objects------------------------------------------------------------------------------------------

// let person = {      // Object Literal
//     name: "Mosh",  //key-value pair or property-string pair
//     age: 30       //key-value pair or property-string pair
// }; 


// // Dot Notation
// person.name = "John";

// // Bracket Notation
// let slection = "name";
// person[slection] = "Mary";

//    console.log(person.name);  
   

// Arrays-------------------------------------------------------------------------------------------

// let selectedColors = ["red","blue"];    // Array Literal
// selectedColors[2] = "green";           // How to add more items to a previously declared array
// console.log(selectedColors);          // An array is a data structure you can use to represent a list of items
// console.log(selectedColors[0]);      // You can specify which item in the index by using [] filled with the number in the index, starting at 0

// selectedColors[3] = "brown";       // If you add extra items after calling for an array list using console.log or something else, it will not appear in the called list unless followed by another console.log
// console.log(selectedColors);

// selectedColors[4] = 889;        // You can have different types in an array, i.e. this number
// console.log(selectedColors);
//                               // The objects in an array as well as the size of the array are dynamic, meaning they can be changed, added to, etc.
//                              // An array is technically an object in javascript, so dot and bracket notation can also be used on arrays
// console.log(selectedColors.length);
                              // The length property returns the number of items or elements in an array



// Functions-------------------------------------------------------------------------------------------------------------
// A function is a set of statements that performs a task or calculates a value

// function greet() {  //function declares a function, greet is the name you are giving the function, parentheses() are part of the syntax for declaring functions, and the curly braces {} contain the body of the function
//     console.log("Hello World");
// }

//greet();

// Performing a task
// function greet(name, lastName) { //name and lastName are parameters of the greet() function
//   console.log("Hello "+ name + " " + lastName);
// }                              //function declarations don't need to end in ; only statements DO end in ;


// // Calculating a value
// function square(number) {
//   return number * number;
// }

// let number = square(2); // We can declare a variable number and set it square(2)
// console.log(number);

// //or

// console.log(square(2)); // We can directly display square(2) by passing it into consol.log() and exclude creating a variable for number

// greet("Alan", "Stuart");   // these are function statements and end with ;
// greet("Jerry", "Sloan");  // Alan, Stuart, Sarah, Julie, Sloan, etc. are arguments of the greet() function
// greet("Sarah", "McClaughlin");
// greet("Julie", "Tuttles");
// greet("Jason", "Momoa");
// greet("Zacharius", "Liston");
// greet("Ali", "Perej");
// greet("Princessa", "Kelsef");

                      // A parameter is a named variable passed into a function
                     // An argument is the actual value that we supply for that parameter

// Operators--------------------------------------------------------------------------------------

     // Arithmetic
    // Assignment
   // Comparison
  // Logical
 // Bitwise 

// Arithmetic Operators---------------------------------------------------------------------------------------------------------------------

// let x = 10;

// let y = 3;

// console.log(x + y); // Addition Operators
// console.log(x - y); // Subtraction Operators
// console.log(x * y); // Multiplication Operators
// console.log(x / y); // Division Operators
// console.log(x % y); // Remainder of Division Operators (modulo)
// console.log(x ** y); // Exponentiation Operators (to the power of)

// // Increment Operators (++)
// console.log(++x);  // This means x will be incremented by 1 first and will show on console.log()
// console.log(x++); // This means x will display on the console.log first and then will increase by one
// console.log(x);  // This asking what x is now that it has increased by 1 in the previous line

// // Decrement Operators (--)
// console.log(--x);    // This means the console will subtract in decrements of 1 from x before displaying x
// console.log(x--);   // This means the console will display the current value of x and then subtract in decrements of 1
// console.log(x);    // This means the console will display the current value of x after reading through previous lines of javascript

// Assignment Operators---------------------------------------------------------------------------------------------------------------------


// let x = 10;       // assigning the number 10 to variable x
// console.log(x);   //  x = 10     ---↴

// x++;              // x with an increment of 1
// console.log(x);   //  x = x+1 = 10+1 = 11      ---↴

// x = x + 3;        // this is what x++ is in longform
// console.log(x);   //  x = x+3 = 11+3 = 14      ---↴

// x = x + 5         // x 
// console.log(x);   //  x = x+5 = 14+5 = 19      ---↴

// x += 17;          // Addition Assignment Operator
// console.log(x);   //  x = x+17 = 19+17 = 36      ---↴

// x = x * 3;        // Longform way of writing x *= 3
// console.log(x);   //  x = x*3 = 36*3 = 108     ---↴

// x *= 2;           // Multiplication Assignment Operator
// console.log(x);   //  x = x*2 = 108*2 = 216      ---↴

// x -= 16;          // Subtraction Assignment Operator
// console.log(x);   //  x = x-16 = 216-16 = 200      ---↴

// x /= 2;           // Division Assignment Operator
// console.log(x);   //  x = x/2 = 200/2 = 100      ---↴

// x %= 6;           // Remainder of Division Assignment Operator
// console.log(x);   //  x = x%6 = 100%6 = 4      ---↴

// x **= 3;          // Exponentiation Assignment Operator
// console.log(x);   //  x = x**3 = 4**3 = 64


// Comparison Operators--------------------------------------------------------

// let x = 1;
// console.log(x);

// // Relational
// console.log(x > 0);     // x is greater than 0 (true)
// console.log(x >= 1);    // x is greater than or equal to 1 (true)
// console.log(x < 1);     // x is less than 1 (false)
// console.log(x <= 1);    // x is less than or equal to 1 (true)

// // Equality
// console.log(x === 1);   // x IS equal to 1 (true)
// console.log(x !== 1);   // x is NOT equal to 1 (false)


// Equality Operators--------------------------------------------------

// Strict Equality (Same Type and Same Value)
// console.log(1 === 1);   // Both number types, both 1 (true)
// console.log("1" === 1); // Both are 1, but one is string and other is number type (false)

// // Loose Equality (Same Value)  -will convert right comparison type to match left comparison type and see if they match in value
// console.log(1 == 1);    // Both are 1 (true)
// console.log("1" == 1);  // Becomes "1" == "1" by converting number on right to string, making both a value of "1" (true)
// console.log(true == 1); // 1 becomes boolean type true, true == true (true)
// try different numbers in above console.log(true == 1); for example 0, -7, NaN, undefined, 2.6


// Ternary (or Conditional) Operators-----------------------------------------------------------------------------------------------------------------

// If a customer has more than 100 points,
// they are a "gold" customer, otherwise,
// they are a "silver" customer.

// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// points = 78;
// type = points > 100 ? "gold" : "silver";
// console.log(type);


// Logical Operators with Booleans----------------------------------------------


// 1. Logical AND (&&)
// Returns true if both operands are true

// console.log(false && true);    // both are NOT true so this is false
// console.log(true && true);    // both ARE true so this true
// console.log(false && false); // neither are true so this definitely false

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);  // both are true so this is true


// 2. Logical OR (||)
// Returns true if one or more of the operands is true

// console.log(true || true);     // both are true so this is true
// console.log(false || true);   // at least one is true so this is true
// console.log(false || false); // neither is true so this is false

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan); // only one has to be true so this is true


// 3. Not (!)
// Returns true if 

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("Eligible", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused", applicationRefused);


// Logical Operators with Non-booleans----------------------------------------------------


      // Falsy (false)
     // undefined
    // null
   // 0
  // false
 // ''
// NaN
     // Anything that is not falsy -> Truthy

// Short-circuiting: When a logical operator stops after finding a truthy or true operand

// let userColor = "red";
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;

// console.log(currentColor); // will return red


// Bitwise Operators-------------------------------------------------------------------------------


// 1 = 00000001   // seven 0's followed by a 1= 8bits = 1 byte of data in a computer
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

// Read, Write, and Execute
// 00000100 // User can Read
// 00000110 // User can read and write
// 00000111 // User can read, write, and execute
// console.log(1 | 2);  // Bitwise OR
// console.log(1 & 2);  // Bitwise AND

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

// let message = (myPermission & readPermission) ? "yes": "no";

// console.log(message);


// Operator Precedence-----------------------------------------------------


//let x = 2 + 3 *4; //PEMDAS BRO!!!

// let a = "red";   // a is red
// let b = "blue"; // b is blue

// // try to swap a and b

// let c = a; // declare "c" as "a" which is red; "c" is now red
// a = b;    // declare "a" as "b"; "a" is now blue
// b = c;   // declare "b" as "c"; "b" is now red


// Logic Practice: Greeting for different times of day
// Hours 6 a.m.-12 p.m., 12 p.m.-6 p.m., 6 p.m.-11 p.m., 12 a.m.-3 a.m., 3 a.m.- 5 a.m. 

// let hour = 10;

// if (hour >= 6 && hour < 12) {
//      console.log("Good morning!"); // displays this if time is between 0600 and 1159
// }
// else if (hour >= 12 && hour < 18) {
//      console.log("Good afternoon!"); // displays this between 1200 and 1759
// }
// else {
//      console.log("Good Evening!"); // displays this from 1800 all the way to 0559
// };

// let role = "guest";

// switch(role) {
//      case "guest":
//           console.log("Guest User");
//           break;
 
//      case "moderator":
//           console.log("Moderator User");
//           break;
     
//      default:
//           console.log("Unknown User");
// }


// console.log("Hello World"); // This works but is ugly
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

           // ------------Types of loops------------------------
          // For
         // While
        // Do...While
       // For...in
      // For...of
     
// for (initialExpression; condition; incrementExpression) {
//     statement;
//}

// for (let i = 0; i < 5; i++) {           // i equals 0; whenever i is less than 5, log value of i, log string "Hello World"; increase value of i by 1 each time until rule is met
//      console.log(i);
//      console.log("Hello World");
// }

// i++ is the same as i+=1
// increments of more than 1 can be written as x+=2 or any other positive number

// while loop
//  let i = 0;

//  while (i <= 5) {
//       if (i %2 !== 0)
//       console.log(i);
//       i++;
//  }

// do while loop
// let i = 9;
// do {
     // if (i %2 !== 0)
     // console.log(i);
     // i++;
// } while (i <= 5);


// for in loop
// const person = {
//      name: "Mosh",
//      age: 30
// };

// for (let key in person)
//      console.log(key, person[key]);

// // Dot Notation
// person.name

// // Bracket Notation
// person["name"]

// const colors = ["red", "green", "blue", "yellow"];

// for (let index in colors)
//      console.log(index, colors[index]);


// // for of loop
// for (let color of colors)
//      console.log(color);


// Break and Continue
// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if(i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let number = max(90, 67);
// console.log(number);

// function max(a, b) {
//     // if (a > b) return a;
//     // if a is greater than b, than the code will not read the next line. So you don't need to use else on the next line
//     // return b;

//     return (a > b) ? a : b; // This line does the same thing as up above but with cleaner code
// }


// console.log(isLandscape(90, 67));

// function isLandscape(width, height) {
//    // if (width > height) return true;
//    // else return false;

//     return (width > height);
// }

//-------------------------------------------------------------------------------------

// fizzBuzz
// Divisible by 3, get Fizz
// Divisible by 5, get Buzz
// Divisible by both, get fizzBuzz
// If neither, return same number
// Not a number, return "Not a number"

//  const output = fizzBuzz();

//  function fizzBuzz(input) {
//      if(typeof input !== "number")
//      console.log("Not a number!");

//      else if((input % 3 !== 0) && (input % 5 !== 0))
//      console.log(input);

//      else if((input % 3 === 0) && (input % 5 === 0))
//      console.log("FizzBuzz");

//      else if(input % 3 === 0)
//      console.log("Fizz");

//      else if(input % 5 === 0)
//      console.log("Buzz");

//  }


// Orrrrr............ this also works


// const output = fizzBuzz();
// console.log(output);

// function fizzBuzz(input) {
//     if(typeof input !== "number")
//         return NaN; 
        
//         if((input % 3 === 0) && (input % 5 === 0))
//         return "FizzBuzz";
        
//         if(input % 3 === 0)
//         return "Fizz";
        
//         if(input % 5 === 0)
//         return "Buzz";
        
//     return input;
// }

//-------------------------------------------------------------------------------------------------------------------

   // Speed limit is 70 km/hr
  // Every 5 km/hr over is 1 point
 // use function Math.floor() to round to nearest integer
// anything more than 12 points gets your license suspended (> 130 km/hr)

// const radar = checkSpeed();
// console.log(radar);

// function checkSpeed(speed) {
//      if(speed >= 130)
//      return "License suspended";
     
//      if(speed <= 70)
//      return "Ok";

//      if((speed >= 75) && (speed < 80))
//      return "1 point";

//      if((speed >= 80) && (speed < 85))
//      return "2 points";

//      if((speed >= 85) && (speed < 90))
//      return "3 points";

//      if((speed >= 90) && (speed < 95))
//      return "4 points";

//      if((speed >= 95) && (speed < 100))
//      return "5 points";

//      if((speed >= 100) && (speed < 105))
//      return "6 points";

//      if((speed >= 105) && (speed < 110))
//      return "7 points";

//      if((speed >= 110) && (speed < 115))
//      return "8 points";

//      if((speed >= 115) && (speed < 120))
//      return "9 points";

//      if((speed >= 120) && (speed < 125))
//      return "10 points";

//      if((speed >= 125) && (speed < 130))
//      return "11 points";
// }

// Orrrr this too.............

// checkSpeed(70);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if(speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
// }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);

//   if(points >= 12)
//     console.log("License suspended");
//   else 
//     console.log("Points", points);
// }


// Even and Odd Numbers----------------------------------------------------------------

//
//
//

// showNumbers(10);

// function showNumbers(limit) {
//      for (let i = 0; i <= limit; i++) {

//           if(i % 2 === 0)
//                console.log(i, "EVEN");
//           else
//                console.log(i, "ODD");
//      }
// }


// Object-oriented Programming (OOP)-------------------------------------------------

// let radius = 1;
// let x = 1;
// let y = 1;


// const circle = {
//      radius : 1,
//      location: {
//           x: 1,
//           y: 1
//      },
//      isVisible: true
//      draw: function() {
//           console.log("draw");
//      }
// };

// circle.draw(); // Method


// Factory Function
// function createCircle(radius, location) {
//      return {
//           radius,
//           draw() {                      // Writing it like this means if you have to refactor this code it exists only in one spot
//                console.log("draw");
//           }
//      };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);


// Value vs. Reference Types-----------------------------------------------------------------------------------------

// let x = { value :10 };
// let y = x;
// x.value = 20;
// console.log(y);

// x = 20;
// y = x;
// x.value = 30;
// console.log(y);
// Constructor Function
// function Circle(radius) {
//      this.radius = radius;
//      this.draw = function() {
//           console.log("draw");
//      }
// }

// const Circle = new Circle(1);
// const x = {};

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour


// const circle = { 
//      radius: 1
// };

// circle.color = "yellow";
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);


// new String();   // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...



// write a user's input and return it as a string
// User answers their name
// first letter of name capitalized

// let name = prompt("What is your name?"):
// console.log()

// prompt("What is your name?") : str
//  let firstName = "macus";
//  let lastName = "desir";
//  let customerName = (firstName +" " + lastName);
// console.log(customerName);

//  function client(name) {
//       name = window.prompt("What's your name?")
//       name.charAt(0).toUpperCase();
//       console.log(name);
     

//  }

//  client();

// const readline = require('readline').createInterface({
//      input: process.stdin,
//      output: process.stdout
//    });
   
//    readline.question('Who are you?', name => {
//      console.log(`Hey there ${name}!`);
//      readline.close();
//    });


// Value vs Reference Types--------------------------------------------------

     // Value Types
         // Number
        // String
       // Boolean
      // Symbol
     // undefined
    // null

    // Reference Types
          // Object
         // Function
        // Array
// let x = { value: 10 };
// let y = x;

// x.value = 20;



// Cloning an Object------------------------------------------------------

const circle = {
     radius: 1,
     draw() {
          console.log("draw");
     }
};

const another = {};

for (let key in circle)
     another [key] = circle[key];

console.log(another);



// Create my own Object-----------------------------------------------
// All my favorite things

const myFavorite = {
     iceCream: "vanilla",
     videoGame: "Madden 08 PC",
     number: 19,
     hybridVehicle: "Hyundai Ioniq",
     currentMusician: "Jenevieve",
     year: 1998,
     sport: "basketball"
};

console.log(myFavorite);

let vegetable = tomato;

function tomato() {
     
}
if(vegetable === tomato)
console.log("This is a tomato");

else
console.log("This isn't a tomato!");

// Object Exercise 1: Address Object

// street
// city
// zipCode
// showAddress(adress)

const address = {
     street: "506 Calcutta Way",
     city: "Walla Walla",
     zipCode: "47231"
};

function showAddress(address) {
     for (let key in address)
          console.log(key, address[key]);
}

showAddress(address);
     