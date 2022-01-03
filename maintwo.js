player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=player1;
document.getElementById("player2").innerHTML=player2;

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("question").innerHTML="questionturn : "+ player1;
document.getElementById("answer").innerHTML="answerturn : " + player2;

function send(){
get_word=document.getElementById("input3").value;
word= get_word.toLowerCase();
charAt1 = word.charAt(1);
console.log(charAt1);

lenth_divide_2=Math.floor(word.lenth / 2);
charAt2=word.charAt(lenth_divide_2);
console.log(charAt2);

lenth_minus_1=word.lenth -1;
charAt3=word.charAt(lenth_minus_1);
console.log(charAt3);

remove_charAt1=word.remove(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);
}

