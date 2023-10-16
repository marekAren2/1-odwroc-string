let napis = 'Akademia108';

function reverseString(string) {
    let rev = string.split('').reverse().join('');
    
    return rev
};

console.log(reverseString('Testowy napis 200 znaków'));
console.log(reverseString(napis));

/* Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.

Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:

najprościej zadanie zrobić używając funkcji javascript do operacji na tablicach */