


var kaveriLista = [];
var kaveriLista2 = [];
var lisattavamaara = 10;

function lisaaHenkilo(){
    var nimi = document.getElementById("nimi").value;
    if(nimi.length == 0){
        alert("Kenttä pitää täyttää");
    }else{
        kaveriLista.push(nimi);
        if(!(lisattavamaara == 0)){
            lisattavamaara -= 1;
        }
        
        document.getElementById("ylateksti").innerHTML = "Lisää " + lisattavamaara + " kaveria";
    }
    if(kaveriLista.length == 10){
        text = "<ol>";
        for (let i = 0; i <kaveriLista.length; i++) {

         text += "<li>" + kaveriLista[i] + "</li>";

        }
        text += "</ol>";

        document.getElementById("tekstikentta").innerHTML = text;
    }
    document.getElementById("kaverilista").reset();

  
}





function lisaaKaveri(){
    var nimi = document.getElementById("nimi2").value;

    if(nimi.length == 0){
        alert("Kenttä pitää täyttää");
    }else{
        kaveriLista2.push(nimi);
    }
    
    paivitaKaverilista()  
    document.getElementById("tekstikentta2").innerHTML = text;
    document.getElementById("kaverilista2").reset();
}

function paivitaKaverilista(){
    text = "<ol>";
    for (let i = 0; i <kaveriLista2.length; i++) {

     text += "<li>" + kaveriLista2[i] + "</li>";

    }
    text += "</ol>";
}


function poistaKaveri(){
    var nimi = document.getElementById("nimi2").value;
    kaveriLista2.splice(kaveriLista2.indexOf(nimi), 1);

    paivitaKaverilista();
    document.getElementById("tekstikentta2").innerHTML = text;
    document.getElementById("kaverilista2").reset();
}



function jarjestaKaverit(){
    kaveriLista2.sort();
    paivitaKaverilista();
    document.getElementById("tekstikentta2").innerHTML = text;
}





