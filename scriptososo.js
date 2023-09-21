// Zadenie 1



function zad1()
{
    var Imie_Nazwisko = prompt("Podaj Imie i nazwisko");
    var wiek = prompt("Podaj wiek");
    var statu = prompt("Podaj swój status aktualny, student?");

    var box =  document.getElementById("box");

    box.innerHTML = "<span style='color:green;'>" + Imie_Nazwisko + "</span><br><br>";
    box.innerHTML += "<i>" + wiek + "</i><br>";
    box.innerHTML += "<strong>" + statu + "</strong><br>"; 
}




// Zadanie 2

function zad2()
{
    let liczba = [ 1 , 2 , 3 ];

    liczba[1] = parseInt(prompt("Podaj liczbe nr 1"));
    liczba[2] = parseInt(prompt("Podaj liczbe nr 2"));
    liczba[3] = parseInt(prompt("Podaj liczbe nr 3"));
    var srednia = (liczba[1] + liczba[2] + liczba[3]) / 3;

    alert("Średnia jest równa " + srednia);
}



// Zadanie 3
// Napisz prosty kalkulator dla dwóch podanych przez użytkownika wartości. Porównaj ze sobą dwie wprowadzone liczby. 

function zad3()
{
    let lib = [ 1 ,  2 ];

    lib[1] = prompt("Podaj liczbe nr 1");
    lib[2] = prompt("Podaj liczbe nr 2");

    var sum = parseInt(lib[1]) + parseInt(lib[2]);

    alert(lib[1] + " + " + lib[2] + " = " + sum);

    if(lib[1] > lib[2])
    {
        alert("liczba nr 1 równa " + lib[1] + " i jest większa od " + lib[2]);
    }
    else if (lib[1] == lib[2])
    {
        alert("Liczby są sobie równe.");
    }


    else {
        alert("liczba nr 2 równa" + lib[2] + " i jest większa od " + lib[1]);
    }
}



// Zadanie 4
// Przetestuj skrypt i podaj, jakie wartości przyjmują zmienne a, b i c w trakcie działania programu. 

function zad4()
{
    var a=7; 
    var b=10; 
    var c; 
    
    alert("a = " + a + "  |b = " +  b + "  |c = " + c);
    
    a--; 
    var a_przed = a;
    alert("a jest równe " + a );
    c=a/2+5; 
    alert(a + " / " + "2 + 5 = " + c);
    b++; 
    alert("b jest równe" + b);
    
    
    a=c+a/3; 
    alert(a + " = " + c + " +" +  a_przed+ "/3");
    var b_przed = b;
    b+=a;
    alert(b_przed + " + " + a + " = " + b);
    var box =  document.getElementById("box");
    box.innerHTML += "a = "+a+", b = "+b+", c = "+c;

}


function zad5()
{
    // Napisz skrypt obliczający pola dowolnych figur płaskich (+ dowolne elementy np. porównanie, sortowanie, ...). 
    var odp = prompt("Wybierz co chcesz obliczyć: Kwadrat , Trójkąt, Koło");

    if(odp=="Kwadrat" || odp=="kwadrat" || odp=="KWADRAT")                   // KWADRAT
    {
        var a = prompt("Podaj bok");
        var wynik = a**2;
        alert("Pole Kwadratu to " + wynik);
    }

    else if (odp=="Trójkąt" || odp=="TRÓJKĄT" || odp=="trójkąt")            // TRÓJKĄT
    {
        var a = prompt("Podaj podstawe");
        var h = prompt("Podaj wysokość trójkąta");
        var wynik = (a * h) / 2;
        alert("Pole Trójkąta to " + wynik);
    }


    else if(odp=="Koło" || odp=="KOŁO" || odp=="koło")                        // KOŁO 
    {
        var PI = 3.14;
        var r = prompt("Podaj promień koła");
        var wynik = PI * r**2;
        alert("Pole Koła jest równe " + wynik);
    }
}
