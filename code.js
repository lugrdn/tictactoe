var turn = 1;
var gameRunning = true;
var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
var xWins = 0;
var oWins = 0;

function gt(x, y) {
    if (gameRunning) {
        if (board[x][y] == 0) {
            if (turn == 1) {
                board[x][y] = 1;
                document.getElementById('x' + x + 'y' + y).textContent = 'X';
                turn = -1;
                document.getElementById('turnText').textContent = 'O';
            }
            else if (turn == -1) {
                board[x][y] = -1;
                document.getElementById('x' + x + 'y' + y).textContent = 'O';
                turn = 1;
                document.getElementById('turnText').textContent = 'X';
            }
        }
        else { }

        for (var r = 0; r < 3; r++) {
            if (board[r][0] + board[r][1] + board[r][2] == 3 || board[r][0] + board[r][1] + board[r][2] == -3) {
                if (turn == 1 * -1) {
                    document.getElementById('winText').textContent = 'X Wins!';
                    gameRunning = false;
                    xWins++;
                    document.getElementById('xWins').textContent = xWins;
                }
                else if (turn == -1 * -1) {
                    document.getElementById('winText').textContent = 'O Wins!';
                    gameRunning = false;
                    oWins++;
                    document.getElementById('oWins').textContent = oWins;
                }
            }
            else { }
        }
        for (var c = 0; c < 3; c++) {
            if (board[0][c] + board[1][c] + board[2][c] == 3 || board[0][c] + board[1][c] + board[2][c] == -3) {
                if (turn == 1 * -1) {
                    document.getElementById('winText').textContent = 'X Wins!';
                    gameRunning = false;
                    xWins++;
                    document.getElementById('xWins').textContent = xWins;
                }
                else if (turn == -1 * -1) {
                    document.getElementById('winText').textContent = 'O Wins!';
                    gameRunning = false;
                    oWins++;
                    document.getElementById('oWins').textContent = oWins;
                }
            }
            else { }
        }
        if (board[0][0] + board[1][1] + board[2][2] == 3 || board[0][0] + board[1][1] + board[2][2] == -3) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'X Wins!';
                gameRunning = false;
                xWins++;
                document.getElementById('xWins').textContent = xWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'O Wins!';
                gameRunning = false;
                oWins++;
                document.getElementById('oWins').textContent = oWins;
            }
        }
        else { }
        if (board[0][2] + board[1][1] + board[2][0] == 3 || board[0][2] + board[1][1] + board[2][0] == -3) {
            if (turn == 1 * -1) {
                document.getElementById('winText').textContent = 'X Wins!';
                gameRunning = false;
                xWins++;
                document.getElementById('xWins').textContent = xWins;
            }
            else if (turn == -1 * -1) {
                document.getElementById('winText').textContent = 'O Wins!';
                gameRunning = false;
                oWins++;
                document.getElementById('oWins').textContent = oWins;
            }
        }
        else { }
    }
}

function restart() {
    turn = 1;
    gameRunning = true;
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            document.getElementById('x' + r + 'y' + c).textContent = ' ';
        }
    }
    document.getElementById('winText').textContent = '';
    document.getElementById('turnText').textContent = 'X';
}