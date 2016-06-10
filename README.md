## TicTacToe Test

#### Initial Setup

Clone repository: `$ git clone git@github.com:zimmed/tic-tac-toe.git`

CD into cloned directory: `$ cd tic-tac-toe`

Create a working branch: `$ git checkout -b game-move-<your-name>`

Install dependencies: `> npm i -g mocha` & `> npm i`

#### Development

First run the mocha-chai tests: `> npm test`

Notice only the first three tests pass. Open game/game-spec.js, and locate the passing tests.

These have been solved for you with the Game.create method. You don't need to modify this method.

The remaining tests rely on a functioning Game.move method for the game instance. Read through the
remaining tests, then begin filling out the Game.move code to satisfy these requirements.

After each small change you make, you can re-run `npm test` to see if you have successfully met the
requirements of the next test.

When all the tests are passing, let me know.