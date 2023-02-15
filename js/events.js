console.log('This is separate JS file');
// option 1: directly set on the HTML element
// <button onclick="console.log(65)">Another button</button>  (ei line ta html page thek e neya, eta javascript na)


// option 2 : add onclick function on the html element
// IMPORTANT : we will use this
// <button onclick = "makeRed()">Make Red</button>  (ei line ta html page thek e neya, eta javascript na)
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3: 
// <button id="make-blue">Make Blue</button>  (ei line ta html page thek e neya, eta javascript na)
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// option 3 another [we will use this sometime]

// <button id="make-purple">Make Purple</button>  (ei line ta html page thek e neya, eta javascript na)
const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option 4
// <button id="make-pink">Make Pink</button>  (ei line ta html page thek e neya, eta javascript na)
const pinkButton = document.getElementById('make-pink');
// console.log('make-pink');
pinkButton.addEventListener('click', makePink);


function makePink() {
    document.body.style.backgroundColor = 'pink';
}



// option 4 another
// <button id="make-green">Make Green</button>  (ei line ta html page thek e neya, eta javascript na)
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})


// option 4 final
// Important: we will use this sometimes

// <button id="make-goldenrod">Make goldenrod</button> (ei line ta html page thek e neya, eta javascript na)
 //    document.getElementById('make-goldenrod').addEventListener('click', function(){}) 
 document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor =   'goldenrod';
}) 