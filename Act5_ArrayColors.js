/* 
5.) We have the following arrays:
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    o = ["th","st","nd","rd"]
    
    Write a JavaScript program to display the colors in the following way (must display until the last color in 
    the array accordingly):
    "1st choice is Blue."
    "2nd choice is Green."
    "3rd choice is Red. 
*/

//Approach: use forEach for going through each array

//declare arrays
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var choiceSuffix = ["th","st","nd","rd"];

//initialize color position with 1st
var arrayCount = 1;

//loop using forEach to go through each color
color.forEach(function(color){

    //initialize count position
    var printSuffix;

    //get the count suffix based on the array position
    switch(arrayCount){
        case 1:
            printSuffix = choiceSuffix[1];
            break;
        case 2:
            printSuffix = choiceSuffix[2];
            break;
        case 3:
            printSuffix = choiceSuffix[3];
            break;
        default:
            printSuffix = choiceSuffix[0];
            break;
    }

//print the position and color
console.log(arrayCount + printSuffix + " choice is " + color + ".");
arrayCount++;

});
