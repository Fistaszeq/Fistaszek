let box1 = document.getElementById("box1");


function zad1() {

    // Wyświetl trzy kolejne potęgi liczby 2 - zacznij od 2 za pomocą operatora przesunięcia bitowego.
    var x = 2;
    box1.innerHTML += "<br><br>X jest równe i jest to pierwsza potęga" + x;
    x = x << 1;
    box1.innerHTML += "<br>X jest równe " + x;
    x = x << 1;
    box1.innerHTML += "<br>X jest równe " + x;
    x = x << 1;
    box1.innerHTML += "<br>X jest równe " + x;
}

function zad2() {
    // Wyświetl sumę i iloczyn trzech kolejnych potęg liczby 2 - zacznij od 2. Do wykonania zadania wykorzystaj operator przesunięcia bitowego oraz przypisania z dodawaniem i mnożeniem.
    var x = 2;
    
    var potega = [1,2,3];
    potega[1] = parseInt(x << 1);
    potega[2] = parseInt(x << 2);
    potega[3] = parseInt(x << 3);
    var sumaPot = potega[1] + potega[2] + potega[3];
    box1.innerHTML += "<br><br>Suma tych trzech potęg jest równa : " + potega[1] + " + " + potega[2] + " + " + potega[3] + " = " + sumaPot;

    var iloczynPot =  potega[1] * potega[2] * potega[3];
    box1.innerHTML += "<br>Iloczyn tych trzech potęg jest równy : " + potega[1] + " * " + potega[2] + " * " + potega[3] + " = " + iloczynPot;

}


function zad3() {
    // Sprawdź czy wartość zmiennoprzecinkowa, wpisana przez użytkownika w oknie dialogowym, jest równa wartości zmiennej x=5. Następnie porównaj wartości wraz z typem.

    var x = 5;
    var zmiennaUsera = prompt("Podaj wartość zmienno przecinkową");

    if(x==zmiennaUsera)
    {
        box1.innerHTML += "<br><br>Podana wartość jest taka sama jak zmienna x = 5 ";

    }
    else if(x>=zmiennaUsera)
    {
        box1.innerHTML += "<br><br>Podana wartość jest mniejsza od naszego x = 5 ";
    }
    else if(x<=zmiennaUsera)
    {
        box1.innerHTML += "<br><br>Podana wartość jest większa od naszego x = 5";

    }
    box1.innerHTML += "Status zmiennej względem int:" + zmiennaUsera===parseInt(zmiennaUsera);
}

function zad4() {
// Wyznacz resztę z dzielenia dwóch liczb podanych przez użytkownika.

var zmienna = [1,2];
zmienna[1] = prompt("Podaj pierwsza liczbę którą podzielimy");
zmienna[2] = prompt("Podaj druga wartość którą podzielimy");

box1.innerHTML += "<br>Dzielenie jest takie : " + zmienna[1] + " / " + zmienna[2] + " = " + zmienna[1] / zmienna[2] + "." + zmienna[1] % zmienna[2]; 

}


function zad5() {

// Zadanie 1
var ex1 = (5 != 8);                   //Wynik przykładu 1
var ex2 = (12 != -1);                 //Wynik przykładu 2
var ex3 = (2 == 2);                  //Wynik przykładu 3
var ex4 = (999 !== 0.234);             //Wynik przykładu 4


// Nie zmieniaj kodu poniżej
box1.innerText += ex1;
box1.innerText += ex2;
box1.innerText += ex3;
box1.innerText += ex4;



//zadanie 2
var ex5 = (5 != 8);                  //Wynik przykładu 1
var ex6 = (12 == -1);                //Wynik przykładu 2
var ex7 = (2 == 2.01);               //Wynik przykładu 3
var ex8 = (999 == 0.234);            //Wynik przykładu 4

// Nie zmieniaj kodu poniżej
box1.innerText +=  ex5;
box1.innerText +=  ex6;
box1.innerText +=  ex7;
box1.innerText +=  ex8;

// Zadanie 3
var ex9 = ((3 == 4) && (1 == 7));        //Wynik przykładu 1
var ex10 = ((12 == 5) || (6 == -4));      //Wynik przykładu 2
var ex11 = !(12 !== 5);             //Wynik przykładu 3


//Nie usuwaj tego kodu
document.getElementById("ex9").innerText += ex9;
document.getElementById("ex10").innerText += ex10;
document.getElementById("ex11").innerText += ex11;



// Zadanie 4
var ex12 = ((2 <= 8) && (1 == 1));          //Wynik przykładu 1
var ex13 = ((0 == 3) || !(13 == -2));       //Wynik przykładu 2
var ex14 = !(!(12 !== 5));                  //Wynik przykładu 3

//Nie usuwaj poniższego kodu
document.getElementById("ex12").innerText += ex12;
document.getElementById("ex13").innerText += ex13;
document.getElementById("ex14").innerText += ex14;

}