module.exports = function toReadable (number) {

//initialize human words

  let arrDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let arrTeens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let arrTens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let aHundred="hundred";
  let aZero="zero";

//transform given number to array of digits

  let arrNumber=number.toString().split("");

//declare functions to transform digits to human words
   
  function funcDigits(i) {
    return arrDigits[arrNumber[i]];
  }

  function funcTeens(i) {
    return arrTeens[arrNumber[i]];
  } 

  function funcTens(i) {
    return arrTens[arrNumber[i]];
  }

  //transform given number to human words, depending on its length
  //for 1-digit numbers

  if (arrNumber.length==1) {

    if (arrNumber[0]==0) {
      return aZero;
    }
    
    else return funcDigits(0);
  }
  
  //for 2-digit numbers

  else if (arrNumber.length==2) {

    if (arrNumber[1]==0) {
      return funcTens(0);
    }

    else if (arrNumber[0]==1) {
      return funcTeens(1);
    }

    else return funcTens(0)+" "+funcDigits(1);

  }

   //for 3-digit numbers

  else if (arrNumber.length==3) {

    if (arrNumber[1]==0 & arrNumber[2]==0) {
      return funcDigits(0)+" "+aHundred;
    }

    else if (arrNumber[2]==0) {
      return funcDigits(0)+" "+aHundred+" "+funcTens(1);
    }

    else if (arrNumber[1]==0) {
      return funcDigits(0)+" "+aHundred+" "+funcDigits(2);
    }

    else if (arrNumber[1]==1) {
      return funcDigits(0)+" "+aHundred+" "+funcTeens(2);
    }

    else return funcDigits(0)+" "+aHundred+" "+funcTens(1)+" "+funcDigits(2);
    
  }

  //for the wrong input

  else return "number out of range [1-999}"

}

