const planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

function sortPlanet(planets){
    let moonsArray = [];
    let sortetPlanets = [];
    planets.forEach(function (el){
       moonsArray.push([el.name, el.numberOfMoons]);
    });
    moonsArray = moonsArray.sort(function (a, b){
       return b[1] - a[1];
    });
    moonsArray.forEach(function (el, index){
        sortetPlanets.push({name: el[0], numberOfMoons: el[1]});
    });
    console.log(sortetPlanets);
}

sortPlanet(planets);