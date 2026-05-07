/*

1.) Given a number ‘number’, assuming it’s ranging from 1 – 999, convert it into 
    words using If.. else condition or simply if conditions or switch statement.
    A dynamic code is to be generated, and a validation can be implemented to ensure that it would only 
    cater the number range above.

    Sample input: var number = 789;
    Sample output: Seven Hundred Eighty Nine

*/

/* 
    Approach: Modular. 
            1. Separate functions are used for ones, tens, and hundreds, 
               and are called based on the digit positions after converting the number to a string.
            2. Used Switch for the numbers and If Else for the conditions
            3. logic is similar to SAP FM SPELL_AMOUNT
*/

//Get ones value
function getOnes(digit) {
    switch (digit) {
        case "1": return "One";
        case "2": return "Two";
        case "3": return "Three";
        case "4": return "Four";
        case "5": return "Five";
        case "6": return "Six";
        case "7": return "Seven";
        case "8": return "Eight";
        case "9": return "Nine";
        default: return "";
    }
}

//Get tens (10–19)
function getTens(twoDigits) {
    switch (twoDigits) {
        case "10": return "Ten";
        case "11": return "Eleven";
        case "12": return "Twelve";
        case "13": return "Thirteen";
        case "14": return "Fourteen";
        case "15": return "Fifteen";
        case "16": return "Sixteen";
        case "17": return "Seventeen";
        case "18": return "Eighteen";
        case "19": return "Nineteen";
        default: return "";
    }
}

//Get (20–90)
function getDoubles(digit) {
    switch (digit) {
        case "2": return "Twenty ";
        case "3": return "Thirty ";
        case "4": return "Forty ";
        case "5": return "Fifty ";
        case "6": return "Sixty ";
        case "7": return "Seventy ";
        case "8": return "Eighty ";
        case "9": return "Ninety ";
        default: return "";
    }
}

//convert number to word function
function numberToWord(number) {

    if (number < 1 || number > 999) {
        return "Invalid number. Only 1-999 allowed.";
    }
    
    //convert number to string to get each digit
    var strNum = number.toString();

    //get string length to check if ones or tens or hundreds
    var strNumLen = strNum.length;

    //initialize result value
    var result = "";

    //Check if 3 digits
    if (strNumLen == 3) {

        //get the ones and add word Hundred for NNN
        result += getOnes(strNum[0]) + " Hundred ";

        //concat the next 2 digits to check value
        var twoDigits = strNum[1] + strNum[2];

        //if NN value is 00 just publish N Hundred
        if (twoDigits == "00") 
            { return result; }

        //check if the NN is in the 10s
        if (strNum[1] == "1") {
            //get 10s
            result += getTens(twoDigits);
        } else {
            //get 20-99
            result += getDoubles(strNum[1]) + getOnes(strNum[2]);
        }
    }

    //Check if 2 digits
    else if (strNumLen == 2) {

        //check if the NN is in the 10s
        if (strNum[0] == "1") {
            result = getTens(strNum);
        } else {
            result += getDoubles(strNum[0]) + getOnes(strNum[1]);
        }
    }

    //Check if 1 digit
    else if (strNumLen == 1) {
        result = getOnes(strNum);
    }

    return result;
}

//initiate var
var number = 15;

//call function to convert number to word
var word = numberToWord(number);

//display
console.log(word);