/* Two variables declared, each assigned to a number, added up together, and result outputted to console.
The same with two strings. */

var alpha = 23;
var beta = 18;
console.log(alpha + beta);

let singer = "Axl Rose";
let guitarist = "Slash";
console.log(singer, "and " + guitarist, "Guns N Roses Super Stars")



/* Multidimensional array. Two of the items in sub-arrays Outputted to the console.. */

let nyWorldSeries = ["Yankees", [1923, 1927, 1928, 1932, 1936, 1937, 1938, 1939, 1941, 1943, 1947, 1949, 1950, 
    1951, 1952, 1953, 1956, 1958, 1961, 1962, 1977, 1978, 1996, 1998, 1999, 2000, 2009], "Mets", [1986, 1969]];
nyWorldSeries[1][26];
nyWorldSeries[3][1];



/* Script that checks if a variable is less than 100. And if it is, alerts the user that 
their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100. */

const numInput = prompt('Please Insert Your Number');
if (numInput < 100) { alert('Your number is less than 100');}
else { alert('Your number (' + numInput + ') is greater than 100');}



/* Function that takes a name as an argument and tells the user what name they've entered. 
The function has been tested. */

function name (nameInput) {
    alert('The name you entered is: ' + nameInput);
}



/* Function that depending upon which virtual 'door' was entered tells the user they've received a different 
'prize' in an alert. The function has 4 doors options, and has been tested. */

function door (doorSelection) {
    if (doorSelection === 1) { alert ('MacBook Pro i7');}
    else if (doorSelection === 2) { alert('1 Week Vacation to Tahiti');}
    else if (doorSelection === 3) { alert('1 Ford Explorer 2018');}
    else if (doorSelection === 4) { alert('$5,000 in Cash');}
    else { alert ('Not a valid selection');}
}