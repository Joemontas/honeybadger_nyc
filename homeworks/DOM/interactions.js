//EXCERSICE 1 (TWO BUTTONS ARGUING WITH EACH OTHER)

let mrRight1 = document.querySelector("#btn01");
let mrRight2 = document.querySelector("#btn02");
let p1 = document.querySelector("#p01");
let p2 = document.querySelector("#p02");


mrRight1.addEventListener("click", function() {
    p1.textContent = 'I AM RIGHT!';
    p2.textContent = '';
});

mrRight2.addEventListener("click", function() {
    p2.textContent = 'No, I AM RIGHT!', p1.textContent = '';
});





// EXCERSICE 2 (HOVER OVER)

// let hover = document.querySelector('#element')

// hover.addEventListener("mouseover", function() {
//     alert("HEY, I TOLD YOU NOT TO HOVER OVER ME!")
// })





// EXCERSICE 3 (KEYPRESS)

// let key = document.querySelector('h1');

// document.addEventListener("keydown", function() {
//     key.textContent = 'YOU JUST TYPED: ' + event.key;
// })





// EXCERSICE 4 (AUTHENTICATION)

// let header = document.querySelector('h1');
// let user = document.querySelector('#username');
// let pass = document.querySelector('#password');
// let submit = document.querySelector('#btn');

// submit.addEventListener("click", function(step1, step2) {
//     if (user.value.match(/[A-Za-z]/ && /[0-9]/) 
//     && (pass.value.match(12345678))) {
//         header.textContent = 'LOGIN SUCCESFUL!'
//     } else {
//         alert('INCORRECT!');
//     }
// });