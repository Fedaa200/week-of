//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number,
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"

function percentOf(num1, num2) {
  // TODO: your code here
  //just we have to return the result
  return num1 + " " + "is" + " " + num1 * num2 + "%" + " " + "of" + " " + num2;
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats"
//pluralize('cat', 1)  ==>  "1 cat"

function pluralize(noun, number) {
  // TODO: your code here
  //we have if statment for the number if it 1 or no
  if(number === 1){
  	// if the number = 1 
  	return (number + " " + noun)
  }else{
  	//if the number != 1
  	return (number + " " + noun + "s")
  }
}

//=============================================== 3

//Write a function called average that takes three numbers as parameters
//and returns their average.
//average(4, 6, 8); ==> 6
//average(2, 3, -2); ==> 1

function average(num1, num2, num3) {
  // TODO: your code here
  //here just we have to write the operatore and return the result
  return(num1+num2+num3)/3
}

//=============================================== 4

//Write a function called wasItFunny that takes a boolean input as parameter
//and returns "meh" if the input was false, and "HAHAHA" if the input was true.
//wasItFunny(true);  ==> "HAHAHA"
//wasItFunny(false); ==> "meh"

function wasItFunny(response) {
  // TODO: your code here
  //we write if statment if the response true 
  if(response===true){
  	//it should return "HAHAHA"
  	return "HAHAHA";
  	//if the response = false
  }if (response===false){
  	//it should return "meh" 
  	return "meh";
  }
}

//=============================================== 5

//Write a function called get10thChar that takes a string as parameter
//and returns the 6th character of an input string.
//Note: assume all input strings will have at least 8 characters
//get10thChar("abcdefghi");  ==>  "f"
//get10thChar("HelloCohort9");  ==>   "C"

function get6thChar(str) {
  // TODO: your code here
  //here we use chareAt(index the number) and return it
  return str.charAt(10);
}
//=============================================== 6

// Write a function that takes a number n and return the summation for
// odd numbers starting from 0 and exclusive n.
// Note: you can use either while or for loop.

// oddSum(7) --> 9
// oddSum(12) --> 36

function oddSum(n) {
  // TODO: your code here
  var sum = 0;
  //here we put for loop in the numbers before the n
  for(var i =0; i < n; i++){
  	//make if statment to jast take the odd numbers
  	if(i%2===1){
  		sum = sum + i;
  	}

  }
  //return sum(result)
  return sum;
}

//=============================================== 7

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/

function drawTriangle() {
  // TODO: your code here
  var x= " ";
  for(var i =1; i<= 7; i++){
  	x = x + "#"
  	console.log(x)
  }
}

//=============================================== 8
//Short Answer Theoretical Questions:
//In your own words, no more than 3 sentences, answer the following:
//What is Function parameter?
//Write your answer here...
parameter variables are so important we use into functions
//What is function argument?
//Write your answer here...
 is a value that must be provided to obtain the functions result
//What is function signature?
//Write your answer here...
input and output of functions or methods.
//What is a variable?
//Write your answer here...
something that changes or that can be changed 

//Good Luck :))
