var Board = require('./board/board');
var Piece = require('./board/piece');

var Game = {

    State: {
        Ready: 'ready',
        Won: 'won',
        Tied: 'tied'
    },

    /**
     * Get the state of the game.
     * @returns Game.State
     */
    getState: function () {
        return this.state;
    },

    /**
     * Get the current playing piece.
     * @returns Piece
     */
    getTurn: function () {
        return this.turn;
    },

    /**
     * Validates the move for the given piece, row and column.
     * @param piece - Playing piece
     * @param row - Natural number in range [1, 3]
     * @param col - Natural number in range [1, 3]
     * @returns [
     *  Boolean - whether the move was valid,
     *  String - the failure message, if invalid move
     *  ]
     */
    validateMove: function (piece, row, col) {
        if (this.state !== this.State.Ready) {
            return [false, "Game is not available for play."];
        }
        if (piece !== this.turn) {
            return [false, "It is the other player's turn."];
        }
        if ((row,col > 3) || (row,col < 1)) {
            return [false, "Out of bound"];
        }

        if (this.board.getSquare(row, col)!== Piece.Empty) {
            return [false, "The square is occupied"];
        }


        // TODO additional move validation
        return [true, ""];
    },

    /**
     * Determine whether the game is over.
     * @returns {boolean} - True if the game has been won or tied, otherwise False.
     */
    gameFinished: function () {
        // TODO see if the game has been won or tied and set the state appropriately.

        var tieflag = 1;
        var owinflag = 0;
        var xwinflag = 0;
        var orowcount = 0;
        var ocolcount = 0;
        var odiagonal1count = 0;
        var odiagonal2count = 0;
        var xrowcount = 0;
        var xcolcount = 0;
        var xdiagonal1count = 0;
        var xdiagonal2count = 0;
        for (var i = 0; i < 3; i++) {
            orowcount = 0;
            xrowcount = 0;
            ocolcount = 0;
            xcolcount = 0;
            for (var j = 0; j < 3; j++) {
                //if (this.board.getSquare(i+1,j+1) === Piece.Empty) {
                if (this.board.getSquare(i+1,j+1) === Piece.Empty) {
                    tieflag = 0;
                }

                if (this.board.getSquare(i+1, j+1) === Piece.X) {
                    xrowcount = xrowcount + 1;
                }
                if (this.board.getSquare(i+1, j+1) === Piece.O) {
                    orowcount = orowcount + 1;
                }

                if (this.board.getSquare(j+1, i+1) === Piece.X) {
                    xcolcount = xcolcount + 1;
                }

                if (this.board.getSquare(j+1, i+1) === Piece.O) {
                    ocolcount = ocolcount + 1;
                }

                if (i === j) {
                    if (this.board.getSquare(i+1, j+1) === Piece.O) {
                        odiagonal1count = odiagonal1count + 1;
                    }
                    else if (this.board.getSquare(i+1, j+1) === Piece.X) {
                        xdiagonal1count = xdiagonal1count + 1;
                    }
                }

                if ((i + j) == 2) {
                    if (this.board.getSquare(i+1, j+1) === Piece.O) {
                        odiagonal2count = odiagonal2count + 1;
                    }
                    else if (this.board.getSquare(i+1, j+1) === Piece.X) {
                        xdiagonal2count = xdiagonal2count + 1;
                    }
                }
            }

            if ((orowcount === 3) || (ocolcount === 3) || (odiagonal1count === 3) || (odiagonal2count ===3)) {
                owinflag = 1;
            }

            if ((xrowcount === 3) || (xcolcount === 3) || (xdiagonal1count === 3) || (xdiagonal2count ===3)) {
                xwinflag = 1;
            }
        }

        if ((owinflag == 1) || (xwinflag ==1) ) {
            this.state = this.State.Won;
            return true;
        }

        if (tieflag === 1) {
            this.state = this.State.Tied;
            return true;
        }
        return false;
    },

    /**
     * Make the next game move.
     * @param row - Natural number in range [1, 3]
     * @param col - Natural number in range [1, 3]
     * @returns {*} - Error message if could not move, or false if move successful.
     */
    move: function (row, col) {
        var valid, message;
        [valid, message] = this.validateMove(this.turn, row, col);
        if (!valid) {
            return message;
        }

        this.board.updateSquare(row, col, this.turn);

        if (this.gameFinished()) {
            return true;
          //  this.state = this.State.Complete;
        } else {
            this.turn = Piece.O === this.turn ? Piece.X : Piece.O;
        }

        return true;
    },

    /**
     * Create instance of game.
     * @returns Game
     */
    create: function () {
        var game = Object.create(this);
        game.state = this.State.Ready;
        game.turn = Math.random() < 0.5 ? Piece.O : Piece.X;
        game.board = Board.create();
        return game;
    }
    
};

module.exports = Game;
