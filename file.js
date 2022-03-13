var randomnumber1 = (Math.floor(Math.random() * 6) +1);

var randomdice1 = "dice" + randomnumber1 + ".png";

var randomImageSource1 = "images/" + randomdice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomnumber2 = (Math.floor(Math.random() * 6) +1);

var randomdice2 = "dice" + randomnumber2 + ".png";

var randomImageSource2 = "images/" + randomdice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "🚩Shyam Wins!";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML = "Ishu Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Match Draw!";
}
