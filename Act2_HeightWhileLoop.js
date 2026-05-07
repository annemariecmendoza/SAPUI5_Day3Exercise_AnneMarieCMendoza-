/*
2. Using While Loop, print the pattern below. Given ‘height’ as height of the triangle and
    assuming it is not a negative number.
    
    Sample input: var height = 5;
    Sample output:

    * * * * *
    * * * *
    * * *
    * *
    *

*/

//Approach: while loop to build initial string and then while loop to print based on reduced string length.


var stars = 3;

//Initialize values
var starIterate = "";
var counter = 0;

//Build the initial line; while loop the counter until equal star count
while (counter < stars) {
    //build the string 
    starIterate += "*";
    //add 1 to counter
    counter++;
}

//loop print the star iterations reducing it by 1 until last iteration
//check if the iteration string length is not equal to 0, meaning it still has * then continue to reduce
while (starIterate.length > 0) {

    //print the current iteration
    console.log(starIterate);

    //reduce the last star
    var starReduced = "";
    var counter = 0;

    //keep reducing until the counter is equal to the iteration length that is not 0
    while (counter < starIterate.length - 1) {
        //get the -1 iteration of * in starReduced
        starReduced += starIterate[counter];
        //add 1 to counter
        counter++;
    }

    //get the reduced iteration
    starIterate = starReduced;
}
