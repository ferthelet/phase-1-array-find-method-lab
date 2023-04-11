// code your solution here
// js
// https://my.learn.co/courses/650/assignments/32968?module_item_id=83194

// sample
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//   ];

function isWin(element) { // cb: true or false
    return element.result === "W";
}

function superbowlWin(array) {
    const winYear = array.find(isWin);
    return winYear === undefined ? winYear : winYear.year;
}

// testing 
// console.log(superbowlWin(record));