const array = [33, 54, 2, 1, 4, 100];

// function getNumber(number, array){
//     let checked = false;
//     array.forEach(function (el){
//        if (number === el) {
//            checked = true;
//        }
//     });
//     console.log(checked);
// }
// getNumber(1, array);

function getNumber(number, array){
    console.log(array.some(function (el){
        return number === el;
    }));
}

getNumber(20202, array);
