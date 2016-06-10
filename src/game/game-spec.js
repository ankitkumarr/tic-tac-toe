var expect = require('chai').expect;
var Game = require('./game');
var Board = require('./board/board');
var Piece = require('./board/piece');

describe('A Game', () => {
    it('is not falsy', () => {
        expect(Game.create()).to.exist;
    });
    it('has a board', () => {
        let game = Game.create();
        expect(game).to.have.property('board');
        expect(game.board).to.eql(Board.create());
    });
    it('has players', () => {
        let game = Game.create();
        expect(game).to.have.property('turn');
    });
    it('has state', () => {
        let game = Game.create();
        expect(game).to.have.property('state');
    })
    it('can be played', () => {
        let msg, game = Game.create();
        expect(game.getState()).to.equal(Game.State.Ready);
        let turn1 = game.getTurn();
        expect(game.move(1, 1)).to.be.false;
        expect(game.board.getSquare(1, 1)).to.equal(turn);
        let turn2 = game.getTurn();
        expect(game.move(2, 2)).to.be.false;
        expect(game.board.getSquare(2, 2)).to.equal(turn);
        expect(game.board).to.eql(Board.create([
            turn1, Piece.Empty, Piece.Empty,
            Piece.Empty, turn2, Piece.Empty,
            Piece.Empty, Piece.Empty, Piece.Empty
        ]));
    });
    it('wont allow cheating', () => {
        // TODO check move ontop of existing move
        // TODO check move outside of row/col range [1, 3]
        expect(true).to.be(false);
    });
    it('will end when won', () => {
        // TODO check that winning conditions produce Won state
        expect(true).to.be(false);
    });
    it('will end when tied', () => {
        // TODO check that tie conditions produce Tied state
        expect(true).to.be(false);
    });
    it('cannot be played when game is over', () => {
        // TODO check that moves cannot be made when game has been Won or Tied
        expect(true).to.be(false);
    })
});