#include <iostream>
#include "singly_linked_list.h"
using namespace std;


// main
int main(int argc, char** argv)
{
  List list;

  list.add_node(1);
  // list.add_node(2);
  // list.add_node(3);
  list.delete_node(1);
  // list.delete_node(3);
  // list.delete_node(2);
  // list.delete_node(2);
  list.print();

  return 0;
}


