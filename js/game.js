var turn = 1;
var value = new Array(9);
//var gameOver = false;
var player1;
var player2;

function change(id) {



    if (turn % 2 == 0) {
        document.getElementById(id).value = "O";
        document.getElementById(id).disabled = true;
        value[id] = "O";
    } else {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        value[id] = "X";
    }

    //checking winner

    if (value["btn1"] == 'X' && value["btn5"] == 'X' && value["btn9"] == 'X') {
        document.getElementById("winner-name").innerHTML = player1 + " won";
        //        gameOver = true;
        disableAllButton();
        return;
    } else if (value["btn3"] == 'X' && value["btn5"] == 'X' && value["btn7"] == 'X') {
        document.getElementById("winner-name").innerHTML = player1 + " won";
        //        gameOver = true;
        disableAllButton();
        return;
    } else if (value["btn1"] == 'O' && value["btn5"] == 'O' && value["btn9"] == 'O') {
        document.getElementById("winner-name").innerHTML = player2 + " won";
        //        gameOver = true;
        disableAllButton();
        return;
    } else if (value["btn3"] == 'O' && value["btn5"] == 'O' && value["btn7"] == 'O') {
        document.getElementById("winner-name").innerHTML = player2 + " won";
        //        gameOver = true;
        disableAllButton();
        return;
    }

    for (var i = 0; i < 7; i += 3) {
        if (value["btn" + (1 + i)] == 'X' && value["btn" + (2 + i)] == 'X' && value["btn" + (3 + i)] == 'X') {
            document.getElementById("winner-name").innerHTML = player1 + " won";
            //            gameOver = true;
            disableAllButton();
            return;
        }
        if (value["btn" + (1 + i)] == 'O' && value["btn" + (2 + i)] == 'O' && value["btn" + (3 + i)] == 'O') {
            document.getElementById("winner-name").innerHTML = player2 + " won";
            //            gameOver = true;
            disableAllButton();
            return;
        }
    }

    for (var i = 0; i < 3; i++) {
        if (value["btn" + (1 + i)] == 'X' && value["btn" + (4 + i)] == 'X' && value["btn" + (7 + i)] == 'X') {
            document.getElementById("winner-name").innerHTML = player1 + " won";
            //            gameOver = true;
            disableAllButton();
            return;
        }
        if (value["btn" + (1 + i)] == 'O' && value["btn" + (4 + i)] == 'O' && value["btn" + (7 + i)] == 'O') {
            document.getElementById("winner-name").innerHTML = player2 + " won";
            //            gameOver = true;
            disableAllButton();
            return;
        }
    }


    if (turn == 9) {
        document.getElementById("winner-name").innerHTML = "Better luck next time";
    }


    turn++;


}

function disableAllButton() {
    var i;
    for (i = 1; i < 10; i++) {
        document.getElementById("btn" + i).disabled = true;
    }
}



function reset() {
    for (var i = 1; i < 10; i++) {
        turn = 1;
        //        gameOver = false;
        document.getElementById("btn" + i).disabled = false;
        document.getElementById("btn" + i).value = "";
        document.getElementById("winner-name").innerHTML = "";
        value["btn" + i] = "";
    }
}

//not working now , need to be fixed
function showTable() {
    if (document.getElementById("player1").value == "" && document.getElementById("player2").value == "") {

    } else {
        player1 = document.getElementById("player1").value;
        player2 = document.getElementById("player2").value;
        document.getElementById("btnReset").style.visibility = "visible";
        document.getElementById("table").style.visibility = "visible";
    }



}
