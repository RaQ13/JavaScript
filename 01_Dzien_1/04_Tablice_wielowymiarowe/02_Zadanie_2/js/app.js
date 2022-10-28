const array2D = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

function print2DArray(array) {
    array.forEach(function (el){
       console.log(el);
    });
}

print2DArray(array2D);