var x=0;
var array = [];
var toggle = false;
var rand = Math.floor(Math.random() *10) + 1;

function array_add(num){
    
    array[x] = num;
    if(array[x]===rand){toggle=true;}
    x++;
    //borrar contenido de la casilla
    document.getElementById("pad_"+num).disabled=true;
    if(x>2){
        document.getElementById("send_btn").disabled = false;
        var elems = document.getElementsByClassName("pad");
        for(var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    }
}

function restart(){
    document.getElementById("restart_btn").hidden = true;
    x=0;
    array = [];
    toggle = false;
    rand = Math.floor(Math.random() *10) + 1;
    var elems = document.getElementsByClassName("pad");
        for(var i = 0; i < elems.length; i++) {
            elems[i].disabled = false;
        }
    document.getElementById("send_btn").disabled = true;
    document.getElementById("Result").innerHTML = "";
    document.getElementById("send_btn").hidden = false;
}
function reveal(){
    document.getElementById("restart_btn").hidden = false;
    document.getElementById("send_btn").hidden = true;
    if(toggle){document.getElementById("Result").innerHTML = "Congrats the number was :" + rand;}
    else{document.getElementById("Result").innerHTML = "The number was " + rand + " try again."}
    
}