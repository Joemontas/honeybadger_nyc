var temp = prompt('Temperture');
var scale = prompt('Scale').toLowerCase();

if (scale === 'c to f') {
    temp = temp * 1.8 + 32;
    console.log(temp);
}

if (scale === 'f to c') {
    temp = (temp - 32) * .5556 ;
    console.log(temp);
}