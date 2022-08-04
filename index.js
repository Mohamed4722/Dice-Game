

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

randomDiceImage = ["images/dice"+randomNumber1+".png","images/dice"+randomNumber2+".png"] ;

for (let kk = 1; kk<3 ; kk++) { document.querySelector(".img"+kk).setAttribute("src",randomDiceImage[kk-1]); }

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 😎① Player 1 wins ! ①⭐ " ;
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " 😎② Player 2 wins ! ②⭐ " ;
}
else {
  document.querySelector("h1").innerHTML = " 😎 Draw ! ⭐" ;
}
