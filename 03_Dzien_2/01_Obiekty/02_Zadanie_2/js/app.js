const timeMachine = {
    shape: "square",
    model: "tr-2321",
    run: function (date, place) {
        console.log("you are back in " + date + " at " + place);
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("1935-10-02", "Abadoned Lands");