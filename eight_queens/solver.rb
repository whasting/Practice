require 'board.rb'
require '../perms.rb'

class Solver
  def initialize
    @board = Board.new
  end

  def solve
    possible_solutions = generate_moves

    # Each possible solution is a 2d array containing coords
    # [[0,0], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7]]
    possible_solutions.each do |possible_solution|

    end
  end

  def generate_moves
    perms = my_perms([0, 1, 2, 3, 4, 5, 6, 7])
    possible_solutions = []

    perms.each do |perm|
      possible_positions = []

      perm.each_with_index do |el, idx|
        possible_positions << [el, idx]
      end

      possible_solutions << possible_positions
    end

    possible_solutions
  end

  # TODO: Make queen class

  # TODO: Starting from starting_pos, in/decrement row and col by 1
  # until a boundary is reached. Return false if another Queen is
  # present
  def check_diagonals(possible_solution)
    # first take all coordinates and create a hash
    possible_solution_hash = Hash.new
    possible_solution.each do |queen_coords|
      possible_solution_hash[queen_coords] = true
    end

    
  end
end
