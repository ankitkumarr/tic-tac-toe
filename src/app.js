var Game = require('./game/game');

(function main() {

    var game = Game.create();
    
    console.log('Game Object', JSON.stringify(game));

    console.log('Finished.');

})();