// getting random no

var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;

// setting source

var src1 = "images/dice" + x + ".png";
var src2 = "images/dice" + y + ".png";

// chaning dice

document.querySelectorAll("img")[0].setAttribute("src", src1);
document.querySelectorAll("img")[1].setAttribute("src", src2);

// declare winner
if (x > y)
    document.querySelector("h1").innerHTML = "Player 1 won 🚩";
// document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if (x < y)
    document.querySelector("h1").innerHTML = "Player 2 won🚩";
else
    document.querySelector("h1").innerHTML = "🚩Draw🚩";