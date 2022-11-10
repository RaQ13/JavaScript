const array1 = [1,2,3,4,5,6,7];
const array2 = [6,7,8,10,11,12,13,14,15];
const array3 = [-4,-3,-2,0,1,2,3,4];

function getLastNumber(number, array) {
    const rest = array.splice(array.length - number, number);
    console.log(rest);
    if (number === "" || typeof number !== "number") {
        let rest = []
    }
}

getLastNumber(2, array1);
