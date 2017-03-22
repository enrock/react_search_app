/*Block scoping examples*/

/*let limit = 100;
limit = 200;
console.log(limit); */

//const limit = 200;
//console.log(limit);

//const emails = ['frodoemail.com', 'samwiseemail.com', 'popmail.com', 'testmail.com'];
//emails.push('pipemail.com');
//console.log(emails); 

/*Const effect global and local scope
let limit = 200;
{
	let limit = 10;
	console.log('backstage limit', limit);
}
console.log('overall venue limit', limit);*/

/* BLOCK SCOPING
function hello(){
	let message = 'Hello';
	console.log(message);
}

function greeting(){
	let message = 'How are you?';
	console.log(message);
}

hello();
greeting();*/


/*SPREAD OPERATOR
let a = ['Dana', 'Erik', 'Frank'];
let b = ['Alice', 'Bob', 'Carl' ...a];
console.log(b);

function collect(...a){
	console.log(a);
}

collect(1,2,3,4,5);*/


/*STRUCTRUING ASSIGNMENTS AND ARRAYS
//let animals = ['Simba', 'Zazu', 'Ed'];
//let [lion, bird] = animals;
//console.log(lion, bird);

let king = {name: 'Mufafsa', kids: 1};
//let name = king.name;
//let kids = king.kids;
let {name, kids} = king;
console.log(name, kids);


let son = {name: 'Simba', parents: 2};
let name, parents;
({name, parents} = son);
console.log(name,parents);*/

/*ARROW FUNCTIONS*/
//Arrow function are anonymous
//setTimeout(function(){ //anonymous function
//console.log('woohoo');
//}, 3000);

//setTimeout(() => { //anonymous function
//console.log('woohoo');
//}, 3000);

//let cheer = ()=> {
	//console.log('woohoo');
//}

//cheer();


/* arrow function, filter method
let values = [20, 30, 40];
let double = (n) => {
	return n*2;
}

let doubled = values.map(double);
console.log(doubled);

let points = [7, 16, 21, 4, 3, 22, 5];
let highscores = points.filter((n) => {
return n > 15;
	})
console.log(highscores);*/



/*IMPORT EXPORT MODULES
//import {fellowship, total} from './fellowship';
//console.log(fellowship, total);

import {add, multiply} from './math';
console.log(multiply(5, 10));*/


/*CLASSES IN JS
class Animal {
	constructor(name, height){
		this.name = name;
		this.height = height;
	}
	hello() {
		console.log("Hi! I'm ${this.name} from the animal kingdom!");
	}
} 

let king = new Animal('Mufasa', 4.5);
console.log(king);
king.hello();*/


/*FROM CLASSES LESSON AND EXTENDS
import Animal from './Animal';*/



/*STIC METHODS IN CLASSES
class Calculator {
	static multiply(a,b){
		return a*b;
	} 

	static add(a,b){
		return a+b;
	}
}

let a = Calculator.add(5,7);
console.log(a);*/

/*PROTOTYPES
function Wizard(name, house, pet){
	this.name = name;
	this.house = house;
	this.pet = pet;

	this.greet = () => {
		return "I'm ${this.name} from ${this.house}";
	}
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
	return 'I have a ${this.pet} named ${this.name}';
};

let harry = new Wizard("Harry Potter", "Gryfndoor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry.info);
*/


/*CLOSURE. lexical scope keeps track of objects within parent scopes*/
/*let call = () => {
	let secret = 'es6 Rocks!'; //secret helps reveal seret to global scope
	let reveal = () => {
		console.log(secret);
	}
	return reveal();
}

let unveil = call();
unveil();*/

/*
const addSuffix = (x) => {
	const concat = (y) => {
		return y + x;
	}
	return concat;
}

let add_ness = addSuffix('ness');
console.log(add_ness);

let h = add_ness('happi');
console.log(h);*/











/*
const poops = (x) => {
	const toilet = (y) => {
		return y + x;
	}
	return toilet;
}

let crapper = poops('stinky');
console.log(crapper);

let h = crapper('Damn');
console.log(h);*/

/*
const kitty = (x) => {
	const litter = (y) => {
		return y + x;
	}
	return litter;
}

let cat = kitty('kitty');
console.log('tabby');

let h = cat('cute');
console.log(h);*/


/*
const product = (x) => {
	return y => {
		return y * x;
	}
}

let mult5 = product(5);
console.log(mult5(3));*/



/*Promises and API's*/
/*
let p = new Promise((resolve, reject) => {
	resolve('Resolved promise data');
})

let.then(response => console.log(response)); */
