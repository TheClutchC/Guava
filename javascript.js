 // This is some javascript code
//  console.log("Hello world!")

//  let name = "Mosh";  //using "name" as a variable name is now deprecated, meaning it'll still work but its use is discouraged
//  console.log(name);

 // Cannot be a reserved keyword
 // Should be meaningful
 // Cannot start with a number(1name)
 // Cannot contain a space or hyphen (-)
 // Are case-sensitive

 // How to declare multiple variables( best practice)
 //let firstName, lastName, middleName; //not this

//  let firstName = "Clay"; 
//  let lastName = "Baruch";  //like these
//  let middleName = "Carney"; //make sure to end line in semi-colon

 
// Best Practice let vs. const: Use const by default when you don't need to reassign a variable, otherwise use let. 
//  let interestRate = 0.3;
//  interestRate = 1; // This is reassigning the value of interestRate from 0.3 to 1, and will appear so in the console
//  console.log(interestRate);

//  const percentageRate = 0.4;
//  percentageRate = 2.5;  // You cannot reassign a const and so this will throw an error in the console
//  console.log(percentageRate);



                // Primitive Types
                    // Strings
                    // Numbers
                    // Boolean
                    // undefined
                    // null

let name = "Mosh"; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName; // let firstName = undefined;
let lastName = null; // Can be used when you want to clear the value of a variable

                // Reference Types
                    // Object
                    // Array
                    // Function

let person = {      // Object Literal
    name: "Mosh",   //key-value pair or property-string pair
    age: 30         //key-value pair or property-string pair
}; 


// Dot Notation
person.name = "John";

// Bracket Notation
let slection = "name";
person[slection] = "Mary";

   console.log(person.name);             