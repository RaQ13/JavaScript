![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Zadanie 1

Napisz funkcję `getNumber`, która ma przyjmować dwa argumenty: liczbę i tablicę. Funkcja ta ma zwracać wartość `true` lub `false`, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]) => true
getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
```

## Zadanie 2

Napisz funkcję `addTheSameNumbers`, która ma przyjmować dwa argumenty: liczbę i tablicę. Funkcja ta ma zwracać sumę wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszy argument funkcji. 

Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć `null`.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
```

## Zadanie 3

W pliku `js/app.js` jest stworzona tablica obiektów `planets`. 

Znajduje się w niej 8 planet Układu Słonecznego wraz z informacjami ile posiadają księżyców. 

Napisz funkcję ```sortPlanet(planets)```, której zadaniem będzie **zwrócenie** nowej, posortowanej wg. ilości księżyców, tablicy. Czyli od Jowisza do Wenus.

Posortowaną tablicę wypisz w konsoli.

## Zadanie 4 - dodatkowe

Napisz funkcję `factors`, która ma przyjmować tylko jeden argument: liczbę, która musi być większa od **0**.
 
 Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). 
 
 Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

## Zadanie 5 - dodatkowe

Napisz funkcję `getMissingElement`, która ma przyjmować tylko jeden argument: tablicę zawierającą rosnące liczby całkowite. 

Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). 

Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać `null`.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
```

## Zadanie 6 - dodatkowe

Napisz funkcję `getLastNumbers`, która ma przyjmować dwa argumenty: liczbę i tablicę. 

Funkcja ta ma zwracać tablicę składającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. 

Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []
```