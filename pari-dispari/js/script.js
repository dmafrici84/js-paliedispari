// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var btn = document.getElementById("gioca");

btn.addEventListener("click", function () {

  var risultato = document.getElementById("risultato");

  var numUtente = parseInt(document.getElementById("numero").value);
  console.log("Numero Utente: " + numUtente);

  numUtente1 = datoUtenteValido(numUtente);
  console.log("Numero Utente Valido: " + numUtente1);

  var numComputer = getRandomIntInclusive(1, 5);

  document.getElementById("numComputer").innerHTML = "Il numero scelto dal Computer è: " + numComputer;
  console.log("Numero Computer: " + numComputer);

  var somma = sommaNumeri(numUtente, numComputer);
  console.log("la somma è: " + somma);

  somma = ePari(somma);
  console.log("La somma è pari = " + somma);

  var scelta = document.getElementById("scelta").value;
  console.log("Scealta Utente: " + scelta);

  if (scelta == "2" && numUtente1 == true) {

    if ( somma == true) {
      risultato.innerHTML= "Hai vinto!!!!";
    } else {
      risultato.innerHTML= "Mi dispiace hai perso";
    }

  } else if (scelta == "3" && numUtente1 == true) {

    if (somma == false) {
      risultato.innerHTML= "Hai vinto!!!!";
    } else {
      risultato.innerHTML= "Mi dispiace hai perso";
    }

  } else {

    risultato.innerHTML= "Attenzione! Non hai fatto alcuna scelta o il numero inserito non è corretto";

  }

});

// funzioni

// funzione per generare un numero casuale
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  numRand = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  return numRand;
}

// funzione per sommare 2 numeri
function sommaNumeri(num1, num2) {
  addiziona = num1 + num2;
  return addiziona
}

// funzione per determinare se un numero è pari o dispari
function ePari(num) {
  if (!(num % 2)) {
    return true;
  } else {
    return false;
  }

}

// funzione che verifica se il dato inserito dall'utente è un numero compreso fra 1 e 5
function datoUtenteValido(num) {
  if (!(isNaN(num)) && (num != "") && (num >= 1) && (num <= 5) ) {
    return true;
  } else {
    return false;
  }
}
