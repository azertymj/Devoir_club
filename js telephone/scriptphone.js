let varscreen =document.getElementById("screen");
let telephone ={
    active : false,
    marque : "TECNO",
    modele : "SPARK 4",
    caracteristique :{couleur : "blue" ,version_android: 12 ,ram: 4},
    
    allumer:function() {
        if (!this.active) {
            let write =document.querySelector("p").textContent="telephone on"
            this.active=true
            varscreen.style.backgroundImage="url('IMG/tecno-tecno_camon_x.jpg')"
            
        }
    },

    eteindre:function() {
        if (this.active) {
            let write =document.querySelector("p").textContent="telephone off"
            varscreen.style.backgroundImage=""
            varscreen.style.backgroundColor="black"
            this.active=false
        }
    },

    appel:function () {
        if (this.active) {
            let numero = prompt("Entez le numero :");
            let sub = numero.substr(1,1)
            console.log(sub)
            if (sub == 7 || sub == 4 || sub == 6 || sub == 2) {
                let write =document.querySelector("p").textContent="Ce numéro ne peut pas être appelé"
                document.querySelector("p").style.color="red"
            }else{
                let write =document.querySelector("p").textContent="appel en cours ..."
                varscreen.style.backgroundColor="green"
                // let btnp =document.getElementById(screen)
                // btnp.innerHTML+="<button>stop</button>"
                
            }
            
        }
    },

    message:function () {
        if (this.active) {
            let numero = prompt("Entez le numero :");
            let sub = numero.substr(1,1)
            console.log(sub)
            if (sub == 7 || sub == 4 || sub == 6 || sub == 2) {
                document.write("Ce numéro ne peut pas recevoir vos messages");
            }else{
                let sms =prompt("Saisissez votre message :")
                document.write("Message envoyé...")
            }
            
        }
    },

}