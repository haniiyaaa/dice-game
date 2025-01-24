const playGame = () => {
  const user1 = Math.floor(Math.random() * 6 + 1);
  console.log(user1);
  const player1 = `assets/dice${user1}.png`;
  document.getElementById("image1").setAttribute("src", player1);

  const user2 = Math.floor(Math.random() * 6 + 1);
  console.log(user2);
  const player2 = `assets/dice${user2}.png`;
  document.getElementById("image2").setAttribute("src", player2);

  if (user1 > user2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!";
  } else if (user1 === user2) {
    document.querySelector("h1").innerHTML = "DRAW!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Won!";
  }
};
