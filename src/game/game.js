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
        // TODO additional move validation
        return [true, ""];
    },

    /**
     * Determine whether the game is over.
     * @returns {boolean} - True if the game has been won or tied, otherwise False.
     */
    gameFinished: function () {
        // TODO see if the game has been won or tied and set the state appropriately.
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
        if (this.gameFinished()) {
            this.state = this.State.Complete;
        } else {
            this.turn = Piece.O === this.turn ? Piece.X : Piece.O;
        }
        return false;
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
