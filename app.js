function sortByLength (array) {
    array.sort(function(a, b){
       return a.length - b.length;
    });
    return array;
};

console.log(sortByLength(["Beg", "Life", "I", "To"])); // ["I", "To", "Beg", "Life"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); // ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"])); // ["Short", "Longer", "Longest"]);