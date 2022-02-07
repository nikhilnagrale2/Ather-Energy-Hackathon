class Tile extends Board {
  constructor(props) {
    super(props);
    // we can change starting tile value here
    this.tileValue = 2;
    this.board = Board.getBoard();
  }

  isValid(x, y) {
    return !this.board[x][y];
  }

  // get random tile
  random() {
    let tile = {
      x: Math.floor(Math.random() * Game.size),
      y: Math.floor(Math.random() * Game.size),
    };
    return tile;
  }

  get() {
    let tile = this.random();
    // check if it is valid tile if present then get new tile
    if (this.isValid(tile.x, tile.y)) {
      return tile;
    } else {
      return this.get();
    }
  }

  // set value of tile
  set(x, y) {
    if (!this.board[x][y]) {
      this.board[x][y] = this.tileValue;
    }
  }

  // clear tile
  clear(x, y) {
    this.board[x][y] = null;
  }

  // check if tile can move
  hasEmpty(row, col, toCheckRow, toCheckColumn) {
    return !this.board[row + toCheckRow][col + toCheckColumn];
  }

  // check if tile can move and have same value
  hasSameValue(row, col, toCheckRow, toCheckColumn) {
    return (
      this.board[row][col] === this.board[row + toCheckRow][col + toCheckColumn]
    );
  }
}
