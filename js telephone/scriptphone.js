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
            // let touchbtn = document.addEventListener('click',btnt)
            // let btnp =document.getElementById("bt").style.visibility="visible"

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
            if (sub == 7 || sub == 4 || sub == 6 || sub == 2) {
                document.querySelector("p").style.visibility="visible"
                let write =document.querySelector("p").textContent="Ce numéro ne peut pas être appelé"
                document.querySelector("p").style.color="red"
                varscreen.style.backgroundImage=""
                varscreen.style.backgroundColor="green"
                setTimeout(() => {
                    this.acceuil()
                }, 3000);
            }else{
                document.querySelector("p").style.visibility="visible"
                let write =document.querySelector("p").textContent="appel en cours ..."
                varscreen.style.backgroundImage=""
                varscreen.style.backgroundColor="green"
                let btnp =document.getElementById("bt").style.visibility="visible"
                let touchbtn = document.querySelector("button") 
                touchbtn.addEventListener('click',()=>{
                    this.acceuil()
                    
                })
                // console.log(touchbtn)
            }
            
        }
    },

    message:function () {
        if (this.active) {
            varscreen.style.backgroundImage=""
            varscreen.style.backgroundColor="aqua"
            let numero = prompt("Entez le numero :");
            let sub = numero.substr(1,1)
            console.log(sub)
            if (sub == 7 || sub == 4 || sub == 6 || sub == 2) {
                document.write("Ce numéro ne peut pas recevoir vos messages");
            }else{
                let sms =prompt("Saisissez votre message :")
                document.querySelector("p").style.visibility="visible"
                let write =document.querySelector("p")
                write.textContent="Message envoyé...";
                setTimeout(() => {
                    write.textContent=`Vous avez envoyer ${sms} à ${numero}`;
                }, 3000);
                write.style.color="green"
                setTimeout(() => {
                    this.acceuil()
                }, 5000);
                
            }
            
        }
    },

    acceuil:function () {
        if (this.active) {  
            varscreen.style.backgroundImage="url('IMG/tecno-tecno_camon_x.jpg')"
            document.querySelector("p").style.visibility="hidden"
            let btnp =document.getElementById("bt").style.visibility="hidden"
        }
    }
}