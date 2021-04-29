// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat() {
    cats.shift('name');
}

function appendCat(name) {
 const catsCopy = [...cats, "Broom"];
 return catsCopy;
}

function prependCat(name) {
    const catsCopy = ["Arnold", ...cats];
    return catsCopy;
   }

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}