// Zadanie 1. Używając document.write wprowadź swoje dane. Zmień formatowanie wyświetlanego tekstu i wprowadź zdjęcie.

// Zadanie 2. Wyświetl treść i wartość działania 15*(3+4)-10.

// Zadanie 3. Utwórz skrypt wyświetlający trzy różne okienka dialogowe. Tekst wprowadzony w okienku tekstowym wyświetl w oknie przeglądarki.

// Wszystkie skrypty opatrz odpowiednimi komentarzami.

// Zadanie 4. Utwórz skrypt, w którym umieścisz pytanie do użytkownika. Tekst wprowadzony ma się wyświetlić w formie "Twoja odpowiedź to ...." w nowym okienku. Treść skryptu umieść w pliku zewnętrznym.

// Zadanie 5. Utwórz skrypt, którego zadaniem jest zebranie informacji o użytkowniku, a następnie wyświetlenie ich na stronie internetowej. Dane mają być wprowadzane za pomocą okien dialogowych. Każda z informacji ma korzystać z własnego okna dialogowego. 

// Rezultat:
// Imię i nazwisko: Jan Kowalski
// Adres e-mail: jankowalski@zsp2olawa.edu.pl


var box1 = document.getElementById("box1");
var btn = document.getElementById("btn");

// Zad 1
document.write("<img src='rock.png'></img>");


var Imie = prompt("Podaj Imie")
var Nazwisko = prompt("Podaj Nazwisko")
var Wiek = prompt("Podaj Wiek")
var email = prompt("podaj email");
var link = prompt("Podaj strone")
// Zad 2
var x = 0;
function akcja()
{

    // Zad 3 




    x++;
    if(x==1)
    {
        box1.innerHTML += "15*(3+4)-10 = ";
    }

    else if(x==2) {
        box1.innerHTML += 15* (3+4) -10;
    }

    else if (x==3){
        box1.innerHTML += "<br>" + "Podane Imię to : " + Imie;
    }

    else if (x==4){
        box1.innerHTML += "<br>" + "Podane Nazwisko to : " + Nazwisko;
    }

    else if (x==5){
        box1.innerHTML += "<br>" + "Podany wiek to : " + Wiek;
    }

    else if(x==6)[
        box1.innerHTML += "<br>" + "<a href='" + link +  "' style='color:green'>" + email + "</a>"
    ]

btn.innerHTML = "akcja / liczba akcji " +  x;
}

