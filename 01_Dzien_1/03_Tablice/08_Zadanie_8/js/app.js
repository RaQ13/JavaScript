const array1 = [4,0,1,3,4];
const array2 = [1,9,6,7,8,17,20,31];

function addArrays(array1, array2) {
    const arraySum = [];
    let rest = 0;
    let restFromMore = 0;
    array1.forEach(function (el1, index1, array1){
       array2.forEach(function (el2, index2, array2){
            if (index1 === index2) {
                arraySum.push(el1 + el2);
            }
       });
    });
    if (array1.length > array2.length) {
        rest = array1.length - array2.length
        restFromMore = array1.slice(array1.length - rest, array1.length);

    } else {
        rest = array2.length - array1.length;
        restFromMore = array2.slice(array2.length - rest, array2.length);
    }
    restFromMore.forEach(function (el){
       arraySum.push(el);
    });
    console.log(arraySum);
}

addArrays(array1, array2);