/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let currentYear = 2024;
let yearOfBirth= 1987;

let age = currentYear - yearOfBirth;
let yearsLeft = 100 - age;

console.log(`età = ${age}, anni mancanti = ${yearsLeft}`);
