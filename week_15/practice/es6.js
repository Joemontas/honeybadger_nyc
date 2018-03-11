//VAREIABLE DECLARATION
/*var is a block scope at leat it is in a if statement
//const is also a block scope
//let is also a block scope
//Block scopes are defined by {}*/

var variable = 'string';
const anotherVariable = 'string';
let yetAnotherVariable = 'string';

//DESTRUCTURING

const myObj = { x: 42, y: 88, z: 99};
const x = myObj.x;
const y = myObj.y;
const z = myObj.z;

const {x, y, z} = myObj;

const anotherObj x: { y: { b: 99} }, z: 99 };



















//CLASSES

class User /*extends Something optional*/ {
    //Extends makes User inherit from Something
    constructor() {
        super();
            this.name = 'Jose';
        }

        sayHi() {
            return 'Hi';
        }

        sayBye() {
            return 'Bye';
    }
};


router.get('/', function(req, res) {
    res.send('hello');
});

router.get('/', (req, res) => res.send('hello'))

node.addEventListener('click', function(e) {
    console.log(this);
})

node.addEventlistener('click', e => console.log(this))

//ASYNC AWAIT

promiseOne().then(function(data) {
    console.log(data);
});

router.get('/', async function (req, res) {
    const data = await PromiseOne();
    console.log(data);
})