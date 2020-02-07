#ifndef SINGLY_LINKED_LIST_H
#define SINGLY_LINKED_LIST_H

#include <iostream>
using namespace std;

// List
class List
{
private:
  struct Node
  {
    int data;
    Node* next;
  };

  Node* head;
  Node* curr;
  Node* temp;

public:
  List();
  void add_node(int add_data); // add 'add_data' to end of the list
  void delete_node(int del_data); // search for first occurrance of 'del_data' and delete from list
  void print(); // print every item in the list to cout
};

#endif // SINGLY_LINKED_LIST_H
