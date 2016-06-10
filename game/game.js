
var Game = {

    move: function (player, row, col) {
        // MAKE THIS FUNCTION WORK
        // Pass all the tests
    },
    
    create: function () {
        var game = Object.create(this);
        game.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        game.player_turn = 'o';
        game.status = 'ready';
        return game;
    }
    
};

module.exports = Game;
