![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Zadanie 1 - rozwiązywane z wykładowcą

W pliku `js/app.js` stwórz konstruktor `Basket`. Na jego bazie stwórz obiekt, który będzie miał następujące pola:
* products - tablica z wszystkimi produktami
* sum - kwota do zapłaty za wszystkie produkty

Do prototypu konstruktora dodaj metody:
* `addProduct(name, price)`, która jako parametry będzie przyjmowała nazwę produktu oraz jego cenę. Cenę podawaj jako typ number, a nazwę jako string. Umieść te dane jako obiekt w tablicy this.products.
* `showBasket()`, której zadaniem będzie wyświetlenie wszystkich produktów z koszyka wraz ceną, oraz kwotą do zapłaty.

Przykładowe wywołanie:

```JavaScript
const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
```



## Zadanie 2 - rozwiązywane z wykładowcą

W pliku `js/app.js` możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.

Metody dodane są do prototypu funkcji.

Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.

Sprawdź w konsoli jak wyglądają poszczególne roboty oraz sam konstruktor.



## Zadanie 3

Stwórz konstruktor ```Calculator``` dla przyszłych obiektów. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu dodaj  następujące metody:
  1. ```add(num1, num2)``` - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  3. ```subtract(num1, num2)``` - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  4. ```divide(num1, num2)``` - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  5. ```printOperations()``` - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearOperations()``` - metoda ma wyczyścić wszystkie operacje z pamięci.

**Pamiętaj o używaniu ```this```**.

