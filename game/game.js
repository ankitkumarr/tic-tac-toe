
var Game = {

    move: (player, row, col) => {
        // MAKE THIS FUNCTION WORK
        // Pass all the tests
    },
    
    create: () => {
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