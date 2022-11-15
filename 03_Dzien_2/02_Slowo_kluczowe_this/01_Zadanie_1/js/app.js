const date = date()

const car = {
    brand: "audi",
    color: "czerwone",
    numberOfKilometers: 0,
    printCarInfo: function () {console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km " + this.overView);},
    drive: function (kilometers) {this.numberOfKilometers += kilometers;},
    overView: ["2021-09-10", "2022-09-10"],
    overViewChecked: function (overView){this.overView.push(overView);}
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();
car.drive(1110);
car.printCarInfo();
car.overViewChecked("2023-09-10");
car.printCarInfo();