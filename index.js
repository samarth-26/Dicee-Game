var n1=Math.random();
n1*=6;
var randomNumber1=Math.floor(n1)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");


var n2=Math.random();
n2*=6;
var randomNumber2=Math.floor(n2)+1;

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
	document.querySelector("#heading").textContent="🚩Player 1 Wins.";
}

if(randomNumber1<randomNumber2){
	document.querySelector("#heading").textContent="Player 2 Wins.🚩";
}

if(randomNumber1===randomNumber2){
	document.querySelector("#heading").textContent="Oh! A Tie.";
}