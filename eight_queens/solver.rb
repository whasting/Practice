require './board.rb'
require '../perms.rb'
require 'byebug'

class Solver
  attr_accessor :solution

  def initialize
    @solution = []
  end

  def solve
    possible_solutions = generate_moves
    non_solutions = []

    # Each possible solution is a 2d array containing coords
    # [[0,0], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7]]
    possible_solutions.each do |possible_solution|
      @solution << possible_solution if check_solution(possible_solution)
      non_solutions << possible_solution unless check_solution(possible_solution)
    end

    @solution
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

  def possible_solution_to_hash(possible_solution)
    possible_solution_hash = Hash.new

    possible_solution.each do |queen_coords|
      possible_solution_hash[queen_coords] = true
    end

    possible_solution_hash
  end

  def check_solution(possible_solution)
    possible_solution_hash = possible_solution_to_hash(possible_solution)

    top_left = Proc.new { |pos| pos[0], pos[1] = pos[0] - 1, pos[1] - 1 }
    bottom_left = Proc.new { |pos| pos[0], pos[1] = pos[0] + 1, pos[1] - 1 }
    top_right = Proc.new { |pos| pos[0], pos[1] = pos[0] - 1, pos[1] + 1 }
    bottom_right = Proc.new { |pos| pos[0], pos[1] = pos[0] + 1, pos[1] + 1 }

    correct_solution = true

    possible_solution_hash.each_key do |k|
      unless check_diagonals(k, possible_solution_hash, &top_left) &&
             check_diagonals(k, possible_solution_hash, &bottom_left) &&
             check_diagonals(k, possible_solution_hash, &top_right) &&
             check_diagonals(k, possible_solution_hash, &bottom_right)

        correct_solution = false
        break
      end
    end

    correct_solution
  end

  def check_diagonals(coords, possible_solution_hash, &prc)
    prc ||= Proc.new { |arr| arr[0], arr[1] = arr[0] + 1, arr[1] + 1 }

    selected_coords = prc.call([coords[0], coords[1]])
    correct_solution = true

    while (selected_coords[0] > - 1 && selected_coords[1] > -1) &&
          (selected_coords[0] < 8 && selected_coords[1] < 8) &&
          correct_solution

      correct_solution = false if possible_solution_hash[selected_coords]

      prc.call(selected_coords)
    end

    correct_solution
  end
end
