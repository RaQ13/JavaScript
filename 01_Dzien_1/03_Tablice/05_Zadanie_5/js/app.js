const array = [1,2,3,4,5,6,7];
const array2 = [2,8,3,7];

function multiply(array){
    let result = array[0];
    array.forEach(function (el, index){
        if (index > 0) {
            result = result * el
        }

    });
    console.log(result);
}
multiply(array);