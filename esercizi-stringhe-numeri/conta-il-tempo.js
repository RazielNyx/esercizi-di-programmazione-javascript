/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let a= 16160;

let b = Math.floor((a/3600)); // ore
let c = a-(b*3600);           // avanzo min+sec
let d =  Math.floor((c/60));  // minuti
let e = c-(d*60);             // secondi

console.log(`${b} ore, ${d} minuti e ${e} secondi.`)
