/*
    4.) Create a function that calculates the perimeter of a triangle. Function should return the value of 
    perimeter.
*/

/*
    Approach: pass 3 values to a function for each triangle side then add. 
*/

function addPerimeter(side1, side2, side3){

    return side1 + side2 + side3;

}

var side1 = 1;
var side2 = 2;
var side3 = 3;

console.log(addPerimeter(side1, side2, side3));