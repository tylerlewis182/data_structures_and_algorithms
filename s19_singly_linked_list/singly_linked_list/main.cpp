#include <iostream>
#include "singly_linked_list.h"
using namespace std;


// main
int main(int argc, char** argv)
{
  // create a list
  List list;

  // push_back
  list.push_back(1);
  list.push_back(2);
  list.push_back(3);
  list.push_back(4);
  list.push_back(5);

  // remove a specific item from the list
  list.remove(2);
  list.print();




  // print entire list
  list.print(); // [1,2,3]

  // size of list
  cout << "size: " << list.size() << endl;

  // min value in list
  cout << "min: " << list.min() << endl;

  // max value in list
  cout << "max: " << list.max() << endl;


}


