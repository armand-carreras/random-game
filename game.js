var x=0;
var array = Array();
var toggle = false;
var rand = Math.floor(Math.random() * (10 - 0)) + 0;

function array_add(){
    
    array[x] = document.getElementById("number").value;
    //alert("Elemento: " + array[x] + "Added at index " + x);
    if(array[x]==rand){toggle=true;}
    x++;
    //borrar contenido de la casilla
    document.getElementById("number").value = ""; 
    if(x>2){
        document.getElementById("add_btn").disabled = true;
        document.getElementById("send_btn").disabled = false;
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
    document.getElementById("add_btn").disabled = false;
    document.getElementById("send_btn").disabled = true;
    document.getElementById("Result").innerHTML = "";
}
function reveal(){
    document.getElementById("restart_btn").hidden = false;
    if(toggle){document.getElementById("Result").innerHTML = "Congrats the number was :" + rand;}
    else{document.getElementById("Result").innerHTML = "The number was " + rand + " try again."}
    
}