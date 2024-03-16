//Question2: Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

 let PersonName = "Hello SHAHMEER"
 let Message = "would you like to learn some typescript today?"
 console.log(`${PersonName} would you like to learn some typescript today?`);

//QUESTION3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 let Name = "shahmeer"
 console.log(Name.toLowerCase());
 console.log(Name.toUpperCase());
 console.log(Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase());

//QUESTION NO 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks
let famousName:string = "oscar Wilde";
console.log(`${famousName}once said, 'To live is the rarest thing in the world. Most people exist, that is all.'`)

// Question no 5 : Famous Quote 2: Repeat Exercise 1, but this time store the famous perso’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string = "oscar Wilde";
let message = `${famous_person}once said, 'To live is the rarest thing in the world. Most people exist, that is all.`
console.log(message);

// QUESTION NO 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
//  Then print the name after stripping the white spaces.

let personName = "\t    shahmeer    \n"
console.log(personName);
console.log(personName.trim());

//Question 7: Number Eight: Write addition, subtraction, multiplication,
//and division operations that each result in the number 8. Enclose your operations in print statements.

console.log(4+4); //ADDITION
console.log(16-8); //SUBSTRACTION
console.log(4*2); //MULTIPLICATION
console.log(16/2); //DIVISION

//Question 8: You should create four lines that look like this:

console.log(6+2); //ADDITION
console.log(17-9); //SUBSTRACTION
console.log(4*2); //MULTIPLICATION
console.log(16/2); //DIVISION

//Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number.
// Print that message.

let FavoriteNumber:number= 7;
console.log(`My favorite number is ${FavoriteNumber}`);

// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
//  Then, write one sentence describing what the program does.

// shahmeer 9-3-2024
// This program prints a personal message
let myName:string = "shahmeer";
console.log(`Hello ${myName},would you like to learn some typescript today!`);

// QUESTION 11: names: Store the names of a few of your friends in a array called names.
//  Print each person%E2%80%99s name by accessing each element in the list, one at a time.

let names: string[] =["Alice", "Bob", "charlie",];
for (let i =0; i < names.length; i++) {
    console.log (names[i]);}


//QUESTION 12;Greetings; Start with the array you used in Exercise 11, but instead of just printing each person%E2%80%99s name,
// print a message to them.
 //The text of each message should be the same, but each message should be personalized with the person%E2%80%99s name.
 
 let Names: string[] =["Alice", "Bob", "charlie",];
for  (let name of names){
    console.log(`Hello ${name}, would you like to learn some typescript today?`);
}
