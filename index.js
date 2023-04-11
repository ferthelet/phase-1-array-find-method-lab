// code your solution here
// js
// https://my.learn.co/courses/650/assignments/32968?module_item_id=83194

// sample
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];

function isWin(year) {
    return year.result === "L";
}

function superbowlWin(array) {
    return array.find(isWin)
}

console.log(superbowlWin(record));