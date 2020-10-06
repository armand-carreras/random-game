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

var input = document.getElementById("number");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add_btn").click();}})



function restart(){
    document.getElementById("restart_btn").hidden = true;
    x=0;
    array = new Array();
    toggle = false;
    rand = Math.floor(Math.random() * (10 - 0)) + 0;
    var elems = document.getElementsByClassName("pad");
        for(var i = 0; i < elems.length; i++) {
            elems[i].disabled = false;
        }
    document.getElementById("send_btn").disabled = true;
    document.getElementById("Result").innerHTML = "";
}
function reveal(){
    document.getElementById("restart_btn").hidden = false;
    if(toggle){document.getElementById("Result").innerHTML = "Congrats the number was :" + rand;}
    else{document.getElementById("Result").innerHTML = "The number was " + rand + " try again."}
    
}