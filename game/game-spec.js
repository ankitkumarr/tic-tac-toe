var expect = require('chai').expect;
var Game = require('./game');

describe('A Game', () => {
    it('is not falsy', () => {
        expect(Game.create()).to.exist;
    });
    it('has a board', () => {
        let game = Game.create();
        expect(game).to.have.property('board');
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ]);
    });
    it('has players', () => {
        let game = Game.create();
        expect(game).to.have.property('player_turn');
        expect(game.player_turn).to.eql('o');
    });
    it('can be played', () => {
        let game = Game.create();
        expect(game.status).to.eql('ready');
        game.move('o', 1, 1);
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', 'o', '-'],
            ['-', '-', '-']
        ]);
        game.move('x', 2, 0);
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', 'o', '-'],
            ['x', '-', '-']
        ]);
    });
    it('wont allow cheating', () => {
        let game = Game.create();
        expect(game.move('o', 3, 3)).to.be.false;
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ]);
        expect(game.move('x', 1, 1)).to.be.false;
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ]);
        game.move('o', 1, 1);
        expect(game.move('x', 1, 1)).to.be.false;
        expect(game.board).to.eql([
            ['-', '-', '-'],
            ['-', 'o', '-'],
            ['-', '-', '-']
        ]);
    });
    it('will end when won', () => {
        let game = Game.create();
        game.move('o', 1, 1);
        game.move('x', 2, 0);
        game.move('o', 0, 0);
        game.move('x', 2, 1);
        game.move('o', 2, 2);
        expect(game.status).to.equal('winner');
        expect(game.board).to.eql([
            ['o', 'o', 'o'],
            ['o', 'o', 'o'],
            ['o', 'o', 'o']
        ]);
    });
    it('will end when tied', () => {
        let game = Game.create();
        game.move('o', 1, 1);
        game.move('x', 2, 0);
        game.move('o', 0, 0);
        game.move('x', 2, 2);
        game.move('o', 2, 1);
        game.move('x', 0, 1);
        game.move('o', 1, 0);
        game.move('x', 1, 2);
        game.move('o', 0, 2);
        expect(game.status).to.equal('tie');
        expect(game.board).to.eql([
            ['o', 'x', 'o'],
            ['o', 'o', 'x'],
            ['x', 'o', 'x']
        ]);
    });
});