function Calculator() {
    this.operations = [];
}

Calculator.prototype.add = function (num1, num2) {
    let result = num1 + num2;
    this.operations.push("Added " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.multiply = function (num1, num2) {
    let result = num1 * num2;
    this.operations.push("multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
}

Calculator.prototype.substract = function (num1, num2) {
    let result = num1 - num2;
    this.operations.push("substracted " + num2 + " from " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function (num1, num2) {
    let result = num1 / num2;
    this.operations.push("divided " + num1 + " by " + num2 + " got " + result);
    return result;
}

Calculator.prototype.printOperations = function () {
    console.log(this.operations);
}

Calculator.prototype.clearOperations = function () {
    this.operations = [];
}

const calc1 = new Calculator();
console.log(calc1.add(5,9));
calc1.printOperations();
console.log(calc1.multiply(20, 6));
calc1.printOperations();
console.log(calc1.substract(123,92));
calc1.printOperations();
console.log(calc1.divide(16,4));
calc1.printOperations();
calc1.clearOperations();
calc1.printOperations();

