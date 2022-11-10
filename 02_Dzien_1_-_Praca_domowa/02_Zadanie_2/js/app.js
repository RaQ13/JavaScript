const array1 = [4, 7, 24, 7, 0, 10];
const array2 = [33, 54, 2, 1, 9, 100];
const array3 = [33, 0, 2, 0, 9, 0];
const array4 = [6, 0, 2, 2, 3, 46];



function addTheSameNumbers(number, array) {
    let sum = 0;
    let equalNumbers = array.filter(function (el, index){
       return el === number
    });
    if (equalNumbers.length === 0) {
        sum = null;
    } else {
        equalNumbers.forEach(function (el){
            sum += el;
        });
    }
    console.log(sum);
}

addTheSameNumbers(7, array1);
