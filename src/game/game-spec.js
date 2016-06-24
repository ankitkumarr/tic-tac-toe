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
    });
    it('can be played', () => {
        let msg, game = Game.create();
        expect(game.getState()).to.equal(Game.State.Ready);
        let turn1 = game.getTurn();
        expect(game.move(1, 1)).to.be.true;
        expect(game.board.getSquare(1, 1)).to.equal(turn1);
        let turn2 = game.getTurn();
        expect(game.move(2, 2)).to.be.true;
        expect(game.board.getSquare(2, 2)).to.equal(turn2);
        expect(game.board).to.eql(Board.create([
            turn1, Piece.Empty, Piece.Empty,
            Piece.Empty, turn2, Piece.Empty,
            Piece.Empty, Piece.Empty, Piece.Empty
        ]));
    });
    it('wont allow cheating', () => {
        let game = Game.create();
        let turn1 = game.getTurn();
        game.move(1,1);
        expect (game.move(1,1)).to.equal("The square is occupied");
        // TODO check move ontop of existing move
        expect (game.move(4,4)).to.equal("Out of bound");
        // TODO check move outside of row/col range [1, 3]
    });
    it('will end when won', () => {
        let game = Game.create();
        game.move(1,1);
        game.move(2,1);
        game.move(1,2);
        game.move(2,2);
        game.move(1,3);
        expect(game.getState()).to.equal(Game.State.Won);
        let game2 = Game.create();
        game2.move(1,1);
        game2.move(1,2);
        game2.move(2,2);
        game2.move(1,3);
        game2.move(3,3);
        expect(game2.getState()).to.equal(Game.State.Won);
        let game3 = Game.create();
        game3.move(1,1);
        game3.move(1,2);
        game3.move(2,1);
        game3.move(2,2);
        game3.move(3,1);
        expect(game3.getState()).to.equal(Game.State.Won);
        // TODO check that winning conditions produce Won state
    });

    it('will end when tied', () => {
        let game = Game.create();
        game.move(1,1);
        game.move(1,2);
        game.move(1,3);
        game.move(2,1);
        game.move(3,1);
        game.move(2,2);
        game.move(3,2);
        game.move(3,3);
        game.move(2,3);
        // TODO check that tie conditions produce Tied state
        expect(game.getState()).to.equal(Game.State.Tied);
    });
    it('cannot be played when game is over', () => {
        let game = Game.create();
        game.move(1,1);
        game.move(2,1);
        game.move(1,2);
        game.move(2,2);
        game.move(1,3);
        expect(game.move(3,1)).to.equal("Game is not available for play.");
        // TODO check that moves cannot be made when game has been Won or Tied
    })
});