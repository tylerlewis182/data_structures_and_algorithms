

class Node
{
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }
}


let first = new Node("Hello");
first.next = new Node("World");
