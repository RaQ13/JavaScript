// const array = [1,2,3,4,5,6,7];
// const array = [1,1,1,1];
const array = [2,8,3,7,4];

function getEvenAverage(array) {
    const arrayEven = [];
    let average = 0;
    let evenAverage = 0;
    array.forEach(function (el){
        if (el % 2 === 0) {
            arrayEven.push(el);
        }
    });
    if (arrayEven.length === 0) {
        return null;
    }
    arrayEven.forEach(function (el){
        average += el;
    });
    evenAverage = (average / arrayEven.length).toFixed(2);
    console.log(evenAverage);
}

getEvenAverage(array);