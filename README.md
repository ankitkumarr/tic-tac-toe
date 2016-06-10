## TicTacToe Test

#### Recommended But Not Required Pre-Setup

Fork this repo into your own github account, and change your origin to your owned repo.

Enter the following into your project directory once you have forked the repo:
`$ git remote set-url origin git@github.com:<your_user>/tic-tac-toe.git`

Then use `$ git pull` or `$ git fetch` to expose the new branches.

#### New Setup

Checkout the new branch: `$ git checkout template-2`

Create your own working branch: `$ git checkout -b template-2-<your-name>`

Install dependencies: `> npm i`

#### Development

First run the mocha-chai tests: `> npm test`

Use the tests in the src/game/board-spec.js to guide you in filling out all of the missing code to pass the failing Board tests.

Next look at src/game/game-spec.js and src/game/game.js. Here you will need to add the missing code to the Game class
as well as finish writing the tests for the more advanced logic. Bonus points for writing tests before implementation.

Remember to pay attention, because the structure (and even variable names) have changed since the last version.

#### Hints

Search for "TODO" in the files to find the sections that need to be completed.

Google `Chai Expect` to find documentation for all of the chain methods that you can use when writing tests.

Use `> node` to enter a live Node.js interpreter. Here you can test concepts and syntax like so:
```
> function MyClass (data) {
... this.data = data;
... this.empty = () => { this.data = null; };
... }
[Function]
> var myObj = new MyClass(17);
[Object object]
> myObj.data
17
> myObj.empty()
undefined
> myObj.data
null
```

Let me know when all the tests pass.
