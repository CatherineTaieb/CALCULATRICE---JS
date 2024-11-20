const tousMesBoutons = document.querySelectorAll(".button");
let calculEnCours = "";
let input = document.querySelector("input");





for (let i = 0; i < tousMesBoutons.length; i++) {
  tousMesBoutons[i].addEventListener("click", function () {
    let valeurDuBouton = tousMesBoutons[i].innerHTML;

    /* créer un "event listener" sur chaque bouton qui se situe dans mon tableau tousMesBoutons. 
    Cet event listener correspond à : au clic, création d'une variable qui s'appelle "valeurDuBouton"*/

    if (valeurDuBouton === "=") {
      input.value = eval(calculEnCours);
      calculEnCours = "";
    } else if (valeurDuBouton === "C") {
      calculEnCours = "";
      input.value = 0;
    } else {
      calculEnCours += valeurDuBouton;
      input.value = calculEnCours;
    }
  });
}

document.addEventListener("keydown", function (event) {
  let boutonClavier = event.key;

  if (boutonClavier === "Enter") {
    input.value = eval(calculEnCours);
    calculEnCours = "";
  } else if (boutonClavier === "Delete") {
    calculEnCours = "";
    input.value = 0;
  } else {
    calculEnCours += boutonClavier;
    input.value = calculEnCours;
  }
});
