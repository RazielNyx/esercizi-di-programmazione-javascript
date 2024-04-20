/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE


  http://www.imparareaprogrammare.it
*/

let n = 2;
let m = 3;

if (n === m) {
      console.log("TRUE")
} else {
    console.log("FALSE")
};

/*
l'operatore Strict equality (===) indica un'uguaglianza stretta, e considera sempre come diversi i differenti tipi di variabile:
una stringa non sarà mai uguale a un numero, quindi con l'input: n = 2, m = '2' l'output è FALSE; se avessi usato l'operatore Equality (==) con input: n = 2 e m = '2', l'output sarebbe stato TRUE).
*/
