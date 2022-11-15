const Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) { // was wrong code
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

const robot1 = new Robot("Roger");
console.log(robot1.name);
console.log(robot1.isFunctional);
robot1.sayHi("Genowefa");
robot1.changeName("Walle");
robot1.fixIt();
robot1.sayHi("Bruno");
