var expect = require('chai').expect;
var Board = require('./board');
var Piece = require('./piece');

describe('A Board', () => {
    let emptyBoard = [
        Piece.Empty, Piece.Empty, Piece.Empty,
        Piece.Empty, Piece.Empty, Piece.Empty,
        Piece.Empty, Piece.Empty, Piece.Empty
    ];
    let testBoard = [
        Piece.X, Piece.Empty, Piece.O,
        Piece.Empty, Piece.X, Piece.O,
        Piece.Empty, Piece.Empty, Piece.X
    ];

    describe('can create', () => {
        it('an empty board by default', () => {
            let board = Board.create();
            expect(board).to.exist;
            expect(board.model).to.eql(emptyBoard);
        });
        it('a clone given an array model', () => {
            let board = Board.create(testBoard);
            expect(board.model).to.eql(testBoard);
        });
        it('a clone given an old board', () => {
            let board = Board.create(testBoard);
            expect(Board.create(board)).to.eql(board);
        });
    });

    describe('can get', () => {
        it('a piece by row/col', () => {
            let board = Board.create(testBoard);
            expect(board.getSquare(2, 1)).to.equal(Piece.Empty);
            expect(board.getSquare(1, 3)).to.equal(Piece.O);
            expect(board.getSquare(3, 3)).to.equal(Piece.X);
        });
    });

    describe('can update', () => {
        it('a piece by row/col', () => {
            let board = Board.create(emptyBoard);
            board.updateSquare(3, 3, Piece.X);
            expect(board.getSquare(3, 3)).to.equal(Piece.X);
            board.updateSquare(3, 3, Piece.O);
            expect(board.getSquare(3, 3)).to.equal(Piece.O);
        });
    });
});