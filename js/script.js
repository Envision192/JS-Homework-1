'use strict'

let myGame = 'WoW';
let myFraction = 'Horde';
const FRACTION_COLOR = '#FF0000';
let myMainClass = 'Hunter';
let myMainSpec = 'MM';
let myAltClass = 'Warrior';
let currentGamePatch = '9.2';

console.log (myGame);
console.log (myFraction);
console.log (FRACTION_COLOR);
console.log (myMainClass);
console.log (myMainSpec);
console.log (myAltClass);
console.log (currentGamePatch);
console.log (myGame + currentGamePatch + myFraction + myMainClass + myMainSpec);
console.log (myAltClass);

// Поменяем немного переменных ( осторожно тавтология!!!)
myAltClass = 'Rouge';
console.log (myAltClass);
myMainSpec = 'BM';
console.log (myMainSpec);

//Homework from lernjs.ru

let admin = 'It is Me :D';
let name = 'Джон';
admin = "Джон";
console.log (admin); // Вернет "Джон"

let ourPlanet = 'Earth';
let currentSiteUser = 'U';

// Константа BIRTHDAY выполняется в верхнем регистре т.к она вычисляется в процессе работы алгоритма
// По воводу AGE не понял =(