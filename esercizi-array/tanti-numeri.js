/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

let a = [3, 5, 10, 2, 8];

//ora sommo tutti i numeri nella variabile a con un loop
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i]
};

//calcolo la media
let media = sum/a.length;

//filtro la variabile a prima coi numeri minori, poi con quelli maggiori della media
const min = a.filter(function (number) {
  return (number < media)
});
const max = a.filter(function (number) {
  return (number > media)
});


console.log(`media = ${media}, valori minori = [${min}], valori maggiori = [${max}]`);
