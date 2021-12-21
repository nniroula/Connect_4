/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

var currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  const board =  [
        [null,   null,   null,   null,   null,   null,  null],
        [null,   null,   null,   null,   null,   null,  null],
        [null,   null,   null,   null,   null,   null,  null],
        [null,   null,   null,   null,   null,   null,  null],
        [null,   null,   null,   null,   null,   null,  null],
        [null,   null,   null,   null,   null,   null,  null]
  ]
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.querySelector("#board");    // select/retrieve table from html file

  // TODO: add comment for this code
  var top = document.createElement("tr");  // create table row
  top.setAttribute("id", "column-top");    // set attribute of id to table row
  top.addEventListener("click", handleClick);  //listen to the click event at table row

  for (var x = 0; x < WIDTH; x++) {  // x < 7, this code appends 7 table data cell to the top row
    var headCell = document.createElement("td");  // create table data for the top row
    headCell.setAttribute("id", x);     // set id to be x for table dat cell
    top.append(headCell);   // append this to top row 
  }
  htmlBoard.append(top);    // append top table row to the html table

  // TODO: add comment for this code
  for (var y = 0; y < HEIGHT; y++) {    // y < 6, it appends table data cell to each row
    const row = document.createElement("tr"); // create a row in html table
    for (var x = 0; x < WIDTH; x++) {   // x < 7
      const cell = document.createElement("td"); // create table data cell
      cell.setAttribute("id", `${y}-${x}`); //creates id for each data cell id = y-x(i.e, like 0-0, 0-1, 0-2, 0-3, 0-4, 0-5, 0-6, 1-0, 1-1, 1-2 ...)
      row.append(cell);
    }
    htmlBoard.append(row); // it creates each row, then appends table data cell to that row. Then appends that row to the html table, and conitnues until all is done
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
//   for (let x = 0; x<WIDTH, x++)
  return 0;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
