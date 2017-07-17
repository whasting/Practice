class Board
  attr_reader :board

  def initialize
    @board = Array.new(8) { Array.new(8) }
  end

  def [](pos)
    row, col = pos
    @board[row][col]
  end

  def []=(pos, piece)
    row, col = pos
    @board[row][col] = piece
  end
end
