var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "F.1.4"){
        reponse.value="https://evossss.github.io/2/";  
    }
    else{reponse.value="Falsche Antwort";
}
    }



