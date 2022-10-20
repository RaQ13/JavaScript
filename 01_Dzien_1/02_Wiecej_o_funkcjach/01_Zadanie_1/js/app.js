function firstFunc() {
    const someInt = 1;

    function secondFunc() {
        console.log(someInt);

        const otherInt = 3;
    }

    secondFunc();

    console.log(otherInt);
}

firstFunc();

/** pierwsza funkcja nie może dostać się do zmiennej otherInt, której
 * zasieg ograniczony jest klamrami drugiej funkcji
*/