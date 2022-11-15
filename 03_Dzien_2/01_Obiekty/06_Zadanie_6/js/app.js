const spoon = {
    isExist: true
}

const fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);

//used reference to change value of spoon by fork