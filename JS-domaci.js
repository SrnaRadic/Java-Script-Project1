var p1;
var p2;
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1result = document.getElementById('player1result');
var player2result = document.getElementById('player2result');
var throwDice1 = document.getElementById('dice1');
var throwDice2 = document.getElementById('dice2');
var roundSHOW = document.getElementById('roundS');
var round = 1;
var player1ScoreSHOW = document.getElementById('player1Score');
var player1Score = 0;
var player2ScoreSHOW = document.getElementById('player2Score');
var player2Score = 0;
var btnStart = document.getElementById('btnStart');
var startAgain = document.getElementById('startAgain');
throwDice2.disabled = true;
throwDice2.style.cursor = "not-allowed";
var playerBox1 = document.getElementsByClassName('playerBox1')[0];
var playerBox2 = document.getElementsByClassName('playerBox2')[0];
startAgain.style.display = "none";


        // Throwing dice for the first player
          throwDice1.addEventListener('click', function () {
          if (round < 11) {
            var dobijenibroj1 = Math.floor(Math.random()*6+1);
            player1result.innerHTML = dobijenibroj1;
            player1Score += dobijenibroj1;
            player1ScoreSHOW.innerHTML = player1Score;
            roundSHOW.innerHTML = round;
            throwDice1.disabled = true;
            throwDice1.style.cursor = "not-allowed";
            throwDice1.style.backgroundColor = "#ff6600";
            throwDice2.disabled = false;
            throwDice2.style.cursor = "pointer";
            throwDice2.style.backgroundColor = "#4CAF50";
        }
        });

        // Throwing dice for the first player + showing winner after 10 rounds are over
          throwDice2.addEventListener('click', function () {
          if (round < 10 ) {
              var dobijenibroj2 = Math.floor(Math.random()*6+1);
              player2result.innerHTML = dobijenibroj2;
              player2Score += dobijenibroj2;
              player2ScoreSHOW.innerHTML = player2Score;
              round += 1;
              throwDice2.disabled = true;
              throwDice2.style.cursor = "not-allowed";
              throwDice2.style.backgroundColor = "#ff6600";
              throwDice1.disabled = false;
              throwDice1.style.cursor = "pointer";
              throwDice1.style.backgroundColor = "#4CAF50";

          }else{
            if (player1Score > player2Score) {
              playerBox1.style.backgroundColor = "#4CAF50";
              throwDice1.style.backgroundColor = "white";
              throwDice1.style.color = "#ff6600";
              player1.innerHTML = "WINNER!";
              throwDice1.disabled = true;
              throwDice1.style.cursor = "not-allowed";
              throwDice2.disabled = true;
              throwDice2.style.cursor = "not-allowed";
              startAgain.style.display = "block";
            }

            else if (player2Score > player1Score) {
              playerBox2.style.backgroundColor = "#4CAF50";
              throwDice2.style.backgroundColor = "white";
              throwDice2.style.color = "#ff6600";
              player2.innerHTML = "WINNER!";
              throwDice1.disabled = true;
              throwDice1.style.cursor = "not-allowed";
              throwDice2.disabled = true;
              throwDice2.style.cursor = "not-allowed";
              startAgain.style.display = "block";
            }

            else {
              playerBox1.style.backgroundColor = "#ff944d";
              playerBox2.style.backgroundColor = "#ff944d";
              throwDice1.style.backgroundColor = "white";
              throwDice1.style.color = "#ff6600";
              throwDice2.style.backgroundColor = "white";
              throwDice2.style.color = "#ff6600";
              player1.innerHTML = "IT'S EVEN!";
              player2.innerHTML = "IT'S EVEN!";
              throwDice1.disabled = true;
              throwDice1.style.cursor = "not-allowed";
              throwDice2.disabled = true;
              throwDice2.style.cursor = "not-allowed";
              startAgain.style.display = "block";
            }
          }
          });


      // This runs after game begins after clicking on "Start game!"
        btnStart.addEventListener('click', startFunction);

      function startFunction() {
      playerBox1.style.backgroundColor = "white";
      playerBox2.style.backgroundColor = "white";
      throwDice1.style.backgroundColor = "#4CAF50";
      throwDice2.style.backgroundColor = "#4CAF50";
      throwDice1.style.color = "white";
      throwDice2.style.color = "white";
      round = 1;
      roundSHOW. innerHTML = 1;
      var p1 = prompt("First player name:");
      var p2 = prompt("Second player name:");
      var showGame = document.getElementById('showGame').style.display = "block";
      btnStart.style.display = "none";
      player1.innerHTML = p1;
      player2.innerHTML = p2;
      player1Score = 0;
      player1ScoreSHOW.innerHTML = 0;
      player1result.innerHTML = 0;
      player2Score = 0;
      player2ScoreSHOW.innerHTML = 0;
      player2result.innerHTML = 0;
      throwDice2.disabled = true;
      throwDice2.style.cursor = "not-allowed";
      startAgain.style.display = "none";
      }

      // This runs after we click on "Start again!" button
        startAgain.addEventListener('click', goToStart);

      function goToStart() {
      showGame.style.display = "none";
      btnStart.style.display = "block";
      throwDice1.disabled = false;
      throwDice2.disabled = false;
      throwDice1.style.cursor = "cursor";
      throwDice2.style.cursor = "cursor";
      }
