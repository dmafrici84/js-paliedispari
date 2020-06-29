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


  var parola2 = parola;
  parola2 = parola2.split("");
  parola2 = parola2.reverse();
  console.log(parola2);

  for (var i = 0; i < parola1.length; i++) {
    if (parola1[i] == parola2[i] ) {

      risultato.innerHTML = "La parola o il numero è palindromo!";
      console.log(parola1[i] + " " +  parola2[i]);

    } else {

        risultato.innerHTML = "La parola o il numero non è palindromo!";
        console.log(parola1[i] + " " +  parola2[i]);
        i = parola.length;

    }

  }

});
