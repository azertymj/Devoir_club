function Hi(name) {
    document.write("Bonjour a toi "+ name)
}

function add(nb1,nb2) {
    let solution = nb1+nb2
    document.write("le resultat est : "+" "+solution)
}

function sous(val1,val2) {
    let solution = val1-val2
    document.write("le resultat est : "+" "+solution)
}
function multiple(nombre) {
    for (let i = 1; i <= 10; i++) {
      document.write(nombre + " x " + i + " = " + (nombre * i));
      console.log(nombre + " x " + i + " = " + (nombre * i));
    }
  }


function r() {
    let choise = prompt("faite votre choix:     1.Dire Bonjour      2.Faire l'addition   3.Faire la soustraction         4.Affiche moi la table de multiplication        5.Quitter")
    choise = parseInt(choise)
    choix(choise)
}



function choix(choise){
    switch (choise) {
        case 1:
            let name = prompt("entrez un nom d'utilisasteur: ")
            Hi(name)
            break;

        case 2:
            let nb1 = prompt("entrez un nombre: ");nb1 = parseInt(nb1)
            let nb2 = prompt("entrez un autre nombre: ");nb2 = parseInt(nb2)
            add(nb1,nb2)
            break;

        case 3:
            let val1 = prompt("entrez un nombre: ");val1 = parseInt(val1)
            let val2 = prompt("entrez un autre nombre: ");val2 = parseInt(val2)
            sous(val1,val2)
            break;
    
       case 4:
            let nombre = prompt("entrez un nombre: ");nombre = parseInt(nombre)
            multiple(nombre)
            break;     
        
        case 5:
            let exit = confirm("voulez vous vraiment sortir :")
            if (exit) {
                alert("Bonne continuation")
                break;
            }else{
                alert("ok");
                r()

            }   
        
        default:
            alert("veuillez choisir un option existente ! ")
            repeat()
            break;
    }
}


r()

