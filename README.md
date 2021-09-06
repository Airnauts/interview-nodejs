Zadanie rekrutacyjne
================

## Zasady:
1. Sforkuj tego gista i ściągnij na swój komputer.
2. Zadanie polega na sprawieniu, żeby testy przechodziły i kod działał.
3. Możesz dodawać kolejne pliki czy struktury, jeżeli uznasz to za stosowne.
4. Nie możesz tylko zmieniać pliku `assembler.spec.js`.
5. Na rozwiązanie zadania masz **1 godzinę**.
6. Po zakończeniu pracy pushnij rozwiązanie do swojego forka gista.
7. W przypadku dowolnych pytań, wątpliwości etc - jestem cały czas z Tobą. Traktuj mnie jak swojego kolegę w sesji pair-programmingu. Jednakże nie będę zmieniać kodu - to Twoje zadanie. Jeżeli coś będzie dla mnie niejasne - postaram się Ci w tym pomóc. 
8. Używaj node'a w wersji >= 10, zależności instaluj yarnem, a testy odpalaj jestem.

## Opis zadania

Twoim zadaniem jest napisanie prostego assemblera.

Assembler ten posiada trzy rejestry (A, B i C), posiada następujące komendy:

* MOV X Y - kopiuje zawartość rejestru Y do rejestru X
* MOV X 10 - kopiuje liczbę 10 do rejestru X
* ADD - dodaje do siebie zawartość rejestrów A i B, a wynik zapisuje do rejestru C
* MUL - mnoży zawartość rejestrów A i B, a wynik zapisuje do rejestru C
* JNZ 4 - skacze do linijki numer 4 (numerujemy linijki od 0) jeżeli zawartość rejestru C jest różna od 0.
* JMP 4 - skacze do linijki numer 4 (numerujemy linijki od 0)

Powodzenia!