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

let role = "guest";

switch(role) {
     case "guest":
          console.log("Guest User");
          break;
 
     case "moderator":
          console.log("Moderator User");
          break;
     
     default:
          console.log("Unknown User");
}