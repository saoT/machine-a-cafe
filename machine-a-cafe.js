// Ceci est un <...>, il contient tout les buveurs de café.
var buveursCAfe = {
  bernard : {
    stress: 90,
    cafe: 50
  },
  paulette : {
    stress: 40,
    cafe: 100
  },
  bob: {
    stress: 0,
    cafe: 150
  }
};

// Cette variable a un type <...>
var doseEau = 20;

// Ces variables ont le meme type mais peuvent être modifiées.
var sachetCafe = 1000;
var bouteilleEau = 1000;

// Une function est comme une machine. Une machine est là pour faire une action.
// Une machine a parfois besoin de "réservoir". En javascript on dit que ce sont des <...>
function machineACafe (reservoirCafe, reservoirEau) {

  sachetCafe = sachetCafe - reservoirCafe;
  bouteilleEau = bouteilleEau - reservoirEau;

  // les symboles qui comparent type '>=' '==' '!=' sont des <...> 
  if ( sachetCafe >= 0 ) {
    console.log('Gringo, il est bon ton café');
  }
  else if ( sachetCafe <= 200 ) {
    console.log('Faut que je pense à acheter du café');
  }
  else {
    // Quand je crée une chaine de caractère à partir de plusieurs chaine de caractère en utilisant '+' je fais de la <...>
    console.log('Il me reste ' + sachetCafe + ' cafe.');
    console.log('Je vais racheter du cafe.');
    acheterCafe();
  }
}

function acheterCafe () {
  // Grace aux "opérateurs d'affectation" de quelle autre façon je peux écrire sachetCafe = sachetCafe + 1000
  sachetCafe = sachetCafe + 1000;
  console.log('J'ai du café');
}

machineACafe(buveursCafe.paulette.cafe, doseEau); // sachetCafe = 1000 - 100;
machineACafe(buveursCafe.bernard.cafe, doseEau); // sachetCafe = 900 - 50;
machineACafe(buveursCafe.bob.cafe, doseEau); // sachetCafe = 850 - 300;
machineACafe(buveursCafe.bob.cafe, doseEau);
machineACafe(buveursCafe.paulette.cafe, doseEau); // sachetCafe = 550 - 100;
machineACafe(buveursCafe.bob.cafe, doseEau); // sachetCafe = 450 - 150;
machineACafe(buveursCafe.bernard.cafe, doseEau); // sachetCafe = 300 - 50;
machineACafe(buveursCafe.paulette.cafe, doseEau); //sachetCafe = 250 - 100;
machineACafe(buveursCafe.bob.cafe, doseEau); // sachetCafe = 150 - 150;