/*

3.) Using For Loop, print the pattern below. Given ‘height’ as height of the ‘X’ sign and
assuming it is not a negative number and ‘height’ is an odd number.
Sample input: var height = 5;
Sample output:
 * *
 * * 
  * 
 * * 
 * *

*/

//Approach: Table/Cells position loop per row to display in diagonal pattern. 

// define the size of the X
var starHeight = 6;

// build the current row
for (var currentRowCount = 0; currentRowCount < starHeight; currentRowCount++) {

    // initialize the string to be built
    var currentLine = "";

    // build the string
    for (var currentCharPosition = 0; currentCharPosition < starHeight; currentCharPosition++) {

        // check if the current row count is the same as the current line position or 
        // if the row count+current position is equal to the starheight-1 to make the diagonal pattern
        if (currentRowCount == currentCharPosition || currentRowCount + currentCharPosition == starHeight - 1) {
            //draw the line
            currentLine += "* ";
        } else {
            //skip the line
            currentLine += "  ";
        }
    }

    // after checking ALL columns, print the completed row
    console.log(currentLine);
}

