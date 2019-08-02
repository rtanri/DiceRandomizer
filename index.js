//For the randomizer Dice

var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6 and buletin ke bawah dengan math.floor
var randomDiceImage = "dice"+ randomNumber1 +".png"; //dice1.png -> dice2.png
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0]; //select the first img element
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "🚩 Play 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

//For the Drumkit pressed

var numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

      var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML){
          case "w":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
          break;

          case "a":
              var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
          break;

          case "s":
              var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
          break;

          case "d":
              var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
          break;

          case "j":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
          break;

          case "k":
              var crash = new Audio("sounds/crash.mp3");
              crash.play();
          break;

          case "l":
              var kick = new Audio("sounds/kick-bass.mp3");
              kick.play();
          break;

          default: console.log(buttonInnerHTML);
}
    }

)};

//var audio = new Audio('sounds/tom1.mp3');
//audio.play();
