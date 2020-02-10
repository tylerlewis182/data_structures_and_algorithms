#ifndef SINGLY_LINKED_LIST_H
#define SINGLY_LINKED_LIST_H

#include <iostream>
using namespace std;

// Node
struct Node
  {
    int data;
    Node* next;
  };

// List
class List
{
private:
  Node* head;
  Node* curr;
  Node* temp;
  size_t _size;
  Node* search(int search_data); // returns a pointer to the first item found or nullptr if value not found - O(n)



public:
  List();
  void push(int add_data); // add item to the front of the list
  void push_back(int add_data); // add item to end of the list
  int pop(); // remove the last item from the list and return it's value
  void remove(int del_data); // search for first occurrance of 'del_data' and delete from list
  size_t size(); // get the number of items in the list ( O(1) )
  int min(); // find the min value in the list ( O(n) )
  int max(); // find the max value in the list ( O(n) )
  void print(); // print every item in the list to cout
};

#endif // SINGLY_LINKED_LIST_H
