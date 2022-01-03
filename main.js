function change(){
    player1=document.getElementById("textinput1").value;
    player2=document.getElementById("textinput2").value;

    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);

window.location="game.html";


}
