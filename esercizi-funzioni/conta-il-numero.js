/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre


  http://www.imparareaprogrammare.it
*/

var n = 1987;
n = n.toString();

if (n.length > 1) {
  console.log(`${n.length} cifre`)
  } else {
    console.log(`1 cifra`)
  };
