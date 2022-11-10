const array1 = [1,2,3,4,5,6,7,9];
const array2 = [-4,-3,-2,0,1,2,3,4];
const array3 = [6,7,8,10,11,12,13,14,15];

function getMissingElement(array){
    let highest = 0;
    let missing = 0;
    array.forEach(function (el){
        if (highest < el) {
            highest = el;
        }
    });
    for (let i = array[0]; i <= highest; i++) {
        if (array.indexOf(i) === -1) {
            missing = i;
        }
    }
    console.log(missing);
}
getMissingElement(array2);