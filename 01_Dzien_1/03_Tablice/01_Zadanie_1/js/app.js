array = [1,2,3,4,5,6,7];

let average = 0;

function distFromAverage (array) {
    array.forEach(function (el){
        average += el;
    });
    average = (Math.floor(average / array.length));
    const dist = array.map(function (el){
       return average - el
    });

    console.log(dist);
    console.log(average);
}

distFromAverage(array);