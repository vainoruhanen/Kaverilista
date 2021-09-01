

const henkiloLista = [];


function lisaaHenkilo(){
    henkiloLista.push(document.getElementById("nimi"));
   

    if(henkiloLista.length == 5){
        var teksti = ""
        for(let i = 0; i < henkiloLista.length; i++){
            teksti += henkiloLista[i] + "<br>";
        }
        document.getElementById("tekstikentta").innerHTML = JSON.stringify(henkiloLista, null, 2)
    }
}




