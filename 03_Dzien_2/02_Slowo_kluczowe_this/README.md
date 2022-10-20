![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz obiekt `car`, utwórz dla niego odpowiednie właściwości i metody.

### Właściwości:
* `brand`,
* `color`,
* `numberOfKilometers` (na początku **0**).

### Metody:
* `printCarinfo()` - metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
* `drive(km)` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

```JavaScript
car.printCarinfo(); => "Czarny Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Czerny mercedes, 20km"
```


## Zadanie do samodzielnego wykonania

Do obiektu `car` z dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).

Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę zwracającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego `this`, żeby odwołać się do obiektu w środku metody.



## Zadanie 2 

Przeanalizuj kod, który znajduje się w pliku `js/app.js`. 

Jest tam stworzony obiekt ```calculator```, który posiada jedną metodę `save(newA,newB)`. Zadaniem tej metody jest zapisanie dla tego obiektu pod pola `a` i `b` dwóch liczb.

Dopisz metody `sum` oraz `multiply`, tak aby zwracały sumę oraz iloczyn tych dwóch liczb ustawionych w metodzie `save`.



## Zadanie 3

Stwórz obiekt `stairs`.

Niech obiekt posiada pole `step`, które na początku ustaw na 0. 

Dodaj do obiektu również następujące metody: 
* `up()`, która zwiększa schodek o 1 (modyfikuj pole step)
* `down()`, która zmniejsza schodek o 1 (modyfikuj pole step)
* `printStep()`, która pokazuje, na którym schodku jesteśmy.

Przykład wywołania:
```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
```

