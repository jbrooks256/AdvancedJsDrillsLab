setName();
function setName() {
    var name = 'Justin';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apple', 'tomato', 'banana'];
let leastFav = fruits[1];
function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
}
printFruits();

someFunc();
function someFunc() {
    console.log('Hello');
    console.log('Justin');
}

let newFunc = function() {
    alert('some text of my choosing');
}
newFunc();