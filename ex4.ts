//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//String
let myName: string = "Rebecca";
console.log("Name given was: " + myName);

//number
let num1: number = 47;
console.log("Chosen number is: " + num1);

//Array
let myArray: number[] = [1,2,3];
for(let i = 0; i < myArray.length; i++)
{
    console.log("The value at position " + (i+1) + " of myArray is " + myArray[i]);
}

//different way to declare an array
let myArray2:Array<number> = [1,2,3];
myArray2.forEach(function(item)
{console.log("The value is " + item)});

//generic
let unknown:any = "anything";
console.log("The value of Unknown is " + unknown);