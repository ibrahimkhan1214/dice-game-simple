document.getElementById("go-btn").onclick = function(){roll()};

function roll(){
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  var side, side2;
  switch(dice1){
    case dice1 = 1: side1 = "dice1.png";
    break;
    case dice1 = 2: side1 = "dice2.png";
    break;
    case dice1 = 3: side1 = "dice3.png";
    break;
    case dice1 = 4: side1 = "dice4.png";
    break;
    case dice1 = 5: side1 = "dice5.png";
    break;
    case dice1 = 6: side1 = "dice6.png";
    break;
    default: side2 = "dice3.png";
  
  }
  document.getElementById("dice1").setAttribute("src", side1);
  switch(dice2){
    case dice2 = 1: side2 = "dice1.png";
    break;
    case dice2 = 2: side2 = "dice2.png";
    break;
    case dice2 = 3: side2 = "dice3.png";
    break;
    case dice2 = 4: side2 = "dice4.png";
    break;
    case dice2 = 5: side2 = "dice5.png";
    break;
    case dice2 = 6: side2 = "dice6.png";
    break;
    default: side2 = "dice3.png";
  }

  document.getElementById("dice2").setAttribute("src", side2);
  if(dice1 > dice2){
    document.getElementById("heading").innerHTML = "Player 1 wins!";
  }
  else if(dice2 > dice1){
    document.getElementById("heading").innerHTML = "Player 2 wins!";
  }
  else{
    document.getElementById("heading").innerHTML = "DRAW!";
  }
}
