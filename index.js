// alert("js is working just fine");
// the alert is to ensure that the js page is connected successfully

var randomNumber1 = Math.floor(Math.random() *6) +1; //to get random number from 11 to 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //for dice image name change randomly

var randomImageSource1 = "images/" + randomDiceImage1; //for new image source name

var image1 = document.querySelectorAll("img")[0]; //this means query selector to find all images in the html and choose the first one (index0)

image1.setAttribute("src", randomImageSource1);  //this is to set an attribute to what you selected, it takes 2 arguments, 1 what you want to pik and 2 what you want to change to

// for second die

var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// for winner

var h1Selector = document.getElementById("winner");

if (randomNumber1 > randomNumber2) {
  h1Selector.innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  h1Selector.innerHTML = "Player 2 wins!";
} else {
  h1Selector.innerHTML = "Its a draw🥳";
}

// for emojis window ;
