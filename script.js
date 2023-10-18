
window.onload = function() {
        initialize();
        createGrid();
        gameStart();
      }
      
      function initialize() {
        playerTurn = 'X';
        count = 0;
        document.getElementById("turn").innerHTML = "It is " + playerTurn + "'s turn!";
        document.getElementById("winner").innerHTML = "";
        xlist = [];
        olist = [];
        ongoing = true;
      }
      
      function createGrid() {
        const gameBoard = document.getElementById("GameBoard");
      
        for (let i = 0; i < 3; i++) {
      
          for (let j = 0; j < 3; j++) {
            const button = document.createElement("button");
            const id = i * 3 + j + 1;
            button.id = id;
            button.classList.add("square");
            gameBoard.appendChild(button);
            button.innerHTML = '   ';
            button.addEventListener("click", clicked);
          }
        }
      
        squares = document.querySelectorAll(".square");
      
      }
      
      
      function gameStart() {
      
        // btn1 = document.getElementById("1");
        // btn2 = document.getElementById("2");
        // btn3 = document.getElementById("3");
        // btn4 = document.getElementById("4");
        // btn5 = document.getElementById("5");
        // btn6 = document.getElementById("6");
        // btn7 = document.getElementById("7");
        // btn8 = document.getElementById("8");
        // btn9 = document.getElementById("9");
      
        // btn1.addEventListener("click", clicked);
        // btn2.addEventListener("click", clicked);
        // btn3.addEventListener("click", clicked);
        // btn4.addEventListener("click", clicked);
        // btn5.addEventListener("click", clicked);
        // btn6.addEventListener("click", clicked);
        // btn7.addEventListener("click", clicked);
        // btn8.addEventListener("click", clicked);
        // btn9.addEventListener("click", clicked);
      
        restartBtn = document.getElementById("restart");
        restartBtn.addEventListener("click", restart);
      }
      
      function clicked() {
        count += 1;
      
        if (ongoing === false) {
          restart();
        }
      
        checkOngoing();

        if (this.innerHTML === '   ') {
                this.innerHTML = playerTurn;
          
              }
      
        if (playerTurn === 'X' && count !== 9) {
          xlist.push(this.id);
          playerTurn = 'O';
          document.getElementById("turn").innerHTML = "It is " + playerTurn + "'s turn!";
        } else if (playerTurn === 'O' && count !== 9) {
          olist.push(this.id);
          playerTurn = 'X';
          document.getElementById("turn").innerHTML = "It is " + playerTurn + "'s turn!";
        } else {
                document.getElementById("turn").innerHTML = "";
        }
      
        if (checkWin()) {
          document.getElementById("turn").innerHTML = "";
          ongoing = false;
          return;
        }
      }
      
      
      function checkOngoing() {
        if (count < 9) {
          return true;
        } else if (count === 9) {
          if (checkWin()) {
            restart();
            return false;
          } else {
            document.getElementById("turn").innerHTML = "";
            document.getElementById("winner").innerHTML = "It's a tie!";
            return false;
      
          }
      
        } else if (ongoing === false) {
          restart();
          return false;
        }
      
        return false;
      }
      
      
      function checkWin() {
        win = [[1, 2, 3], [3, 6, 9], [4, 5, 6], [2, 5, 8], [7, 8, 9], [1, 4, 7], [1, 5, 9], [3, 5, 7]];
      
      
        for (let i = 0; i < win.length; i++) {
          ocount = 0;
          xcount = 0;
      
          curr = win[i];
      
          for (let j = 0; j < 3; j++) {
      
            if (olist.includes(String(curr[j]))) {
              ocount += 1;
            }
      
            if (xlist.includes(String(curr[j]))) {
              xcount += 1;
            }
      
          }
      
          if (ocount === 3) {
            document.getElementById("winner").innerHTML = "Player O wins!";
            ongoing = false;
            return true;
          }
      
          if (xcount === 3) {
            document.getElementById("winner").innerHTML = "Player X wins!";
            ongoing = false;
            return true;
          }
        }
      
        return false;
      
      }
      
      function restart() {
        squares.forEach(square => square.innerHTML = '   ');
        initialize();
      }
      
      