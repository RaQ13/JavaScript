![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Zadanie 1

Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.

Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.

Napisz takie eventy, żeby po zaznaczeniu checkboxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza wewnątrz elementu ```order-info``` wyświetliła się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to wartość zamówienia (cena za dodatki + 35zł podstawy za pizze). Pamiętaj o tym, że kliknięcie w przycisk wywołuje domyślną akcję przeładowania strony. Zablokuj tą akcję, aby móc zobaczyć wpisaną informację do elementu ```order-info```.

Zwróć uwagę na dwa specjalne przyciski:
* Wyczyść - powinien odznaczyć wszystkie opcje,
* Wszystkie dodatki - powinien zaznaczyć wszystkie opcje
