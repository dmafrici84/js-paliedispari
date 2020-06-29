//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var btn = document.getElementById("verifica");

btn.addEventListener("click", function () {

  var risultato = document.getElementById("risultato");

  var parola = document.getElementById("parola").value;
  console.log(parola);

  var parola1 = parola;
  parola1 = parola1.split("");
  console.log(parola1);

  var parolaInvertita = parola;
  parolaInvertita = parolaInvertita.split("");
  parolaInvertita = parolaInvertita.reverse();
  console.log(parolaInvertita);

  parola1 = palindroma(parola1, parolaInvertita);
  console.log("parola palindroma = " + parola1);

  if (parola1 == true){

    risultato.innerHTML = "La parola o il numero è palindromo!";
    console.log("La parola o il numero è palindromo!");

  } else {

      risultato.innerHTML = "La parola o il numero non è palindromo!";
      console.log("La parola o il numero NON è palindromo!");

  }

});

// funzione per determinare se la parola è palindroma
function palindroma(stringa, strigaInvertita) {

  for (var i = 0; i < stringa.length; i++) {
    if (stringa[i] == strigaInvertita[i] ) {
      return true;
    } else {
      return false;
    }
  }

}
