


var kaveriLista = [];
function lisaaHenkilo(){
    var nimi = document.getElementById("nimi").value;
    kaveriLista.push(nimi);


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




