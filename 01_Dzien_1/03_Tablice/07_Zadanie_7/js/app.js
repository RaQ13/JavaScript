const array = [145,11,3,64,4,6,10];

function sortArray(array){
    const sorted = array.sort(function (a , b){
       return a - b;
    });
    console.log(sorted);
}

sortArray(array);