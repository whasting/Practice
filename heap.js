class Heap {
  constructor() {
    this.nodes = [];
  }

  peek() {

  }

  insert( node ) {

  }

  // return root
  extract() {
    return this.nodes[0];
  }

  deleteRoot() {

  }

  replace( newNode ) {

  }

  createHeap() {
    return [];
  }

  heapify() {

  }

  merge( heapOne, heapTwo ) {

  }

  // Like merge!( h1, h2 )
  meld( heapOne, heapTwo ) {

  }

  size() {
    return this.nodes.length;
  }

  isEmpty() {
    return this.size() === 0;
  }


}

class Node {
  constructor( val, parent, leftChild, rightChild ) {
    this.value = val;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
