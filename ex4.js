//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//String
var myName = "Rebecca";
console.log("Name given was: " + myName);
//number
var num1 = 47;
console.log("Chosen number is: " + num1);
//Array
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value at position " + (i + 1) + " of myArray is " + myArray[i]);
}
//different way to declare an array
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) { console.log("The value is " + item); });

//generic
var unknown = "anything";
console.log("The value of Unknown is " + unknown);