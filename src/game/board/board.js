var Piece = require('./piece');

var Board = {

    /**
     * Convert natural-base row/column to 0-base index.
     * @param row - Natural number in range [1, 3]
     * @param col - Natural number in range [1, 3]
     * @returns Number
     */
    getIndex: function (row, col) {
        // TODO make this return the correct model index.
        return ((row-1)*3) + (col - 1);
    },

    /**
     * Update the board with the designated piece.
     * @param row - Natural number in range [1, 3]
     * @param col - Natural number in range [1, 3]
     * @param piece - A Piece.
     */
    updateSquare: function (row, col, piece) {
        var index = this.getIndex(row, col);
        this.model[index] = piece;
    },

    /**
     * Get piece at the given row and col.
     * @param row - Natural number in range [1, 3]
     * @param col - Natural number in range [1, 3]
     * @returns Piece
     */
    getSquare: function (row, col) {
        var index = this.getIndex(row, col);
        return this.model[index];
    },

    /**
     * Create new board instance
     * @param oldBoard - Optional oldBoard to clone.
     * @returns Board
     */
    create: function (oldBoard) {
        var board = Object.create(this);

        if (oldBoard && Array.isArray(oldBoard)) {
            board.model = oldBoard;
        } else if (oldBoard) {
            board.model = oldBoard.model;
        } else {
            board.model = [
                Piece.Empty, Piece.Empty, Piece.Empty,
                Piece.Empty, Piece.Empty, Piece.Empty,
                Piece.Empty, Piece.Empty, Piece.Empty
            ];
        }

        return board;
    }
};

module.exports = Board;