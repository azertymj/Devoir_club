// alert("Hello word")
// document.write("Hello word")
// console.log("Hello word");

let unNombre ;

unNombre = prompt("Entrez un nombre : ")
unNombre = parseInt(unNombre)


// function pariter(unNombre) {
//     if (unNombre%2==1) {
//         document.write("c est impair")
//     }else{
//         document.write("c est paire")
//     }
// }

if (unNombre>=1 && unNombre<=7) {
    switch (unNombre) {
        case 1:
            pariter();
            document.write("c est lundi")
            break;

        case 2:
            pariter();
            document.write("c est mardi")
            break;

        case 3:
            pariter();
            document.write("c est mercredi")
            break;
            
        case 4:
            pariter();
            document.write("c est jeudi")
            break; 
         
        case 5:
            pariter();
            document.write("c est vendredi")
            break;
            
        case 6:
            pariter();
            document.write("c est samedi")
            break; 
            
        case 7:
            pariter();
           document.write("c est dimanche")
           break;    
    
        default:
            
            break;
    }
}


// else{
//     alert("cherche une autre valeur ¡")
// }