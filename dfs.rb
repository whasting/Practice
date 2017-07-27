def dfs(node, target)
  return nil if node.nil?
  return node if node.value == target
  left = dfs(node.left, target)
  right = dfs(node.right, target) unless left
  left || right
end

def bfs(root, target)
  queue = Queue.new.enq(root)
  curr_node = nil

  until queue.empty?
    curr_node = queue.deq
    return curr_node if curr_node.value == target
    queue.enq(curr_node.left) unless curr_node.left.nil?
    queue.enq(curr_node.right) unless curr_node.right.nil?
  end
end

class Node
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

a = Node.new('a')
b = Node.new('b')
c = Node.new('c')
d = Node.new('d')
e = Node.new('e')
f = Node.new('f')
g = Node.new('g')
h = Node.new('h')

a.left = b
a.right = c

b.left = d
b.right = e

d.left = f

c.left = g
c.right = h

# p dfs(a, 'd')
# p dfs(a, 'h')
bfs(a, 'c')
