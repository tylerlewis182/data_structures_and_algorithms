#include "singly_linked_list.h"
#include <iostream>
#include <limits>
using namespace std;



// constructor
List::List()
{
  head = nullptr;
  curr = nullptr;
  temp = nullptr;
  _size = 0;
}





// search
Node* List::search(int search_data)
{
  curr = head;
  while(curr != nullptr && curr->data != search_data)
  {
    curr = curr->next;
  }
  return curr;
}




// push_back
void List::push_back(int add_data)
{
  // create a new node
  Node* n = new Node;
  n->data = add_data;
  n->next = nullptr;

  // if list already contains at least 1 item
  if(head != nullptr)
  {
    // insert new node at the end of the list
    curr = head;
    while(curr->next != nullptr)
    {
      curr = curr->next;
    }
    curr->next = n;
    curr = nullptr;
  }

  // else, if the list is empty
  else
  {
    // point head at the new node
    head = n;
  }
  _size++;
}



// pop
int List::pop()
{
  // TODO: Finish pop method


  return -1;
}


// remove
void List::remove(int del_data)
{
  // if the list is empty, return
  if(head == nullptr)
  {
    return;
  }

  // TODO: Finish remove
  List::search(del_data); // might return nullptr...


}



// size
size_t List::size()
{
  return _size;
}



// min
int List::min()
{
  curr = head;
  int min_value = std::numeric_limits<int>::max();
  while(curr != nullptr)
  {
    if(curr->data < min_value)
    {
      min_value = curr->data;
    }
    curr = curr->next;
  }
  return min_value;
}



// max
int List::max()
{
  curr = head;
  int max_value = std::numeric_limits<int>::min();
  while(curr != nullptr)
  {
    if(curr->data > max_value)
    {
      max_value = curr->data;
    }
    curr = curr->next;
  }
  return max_value;
}


// print
void List::print()
{
  // if the list is empty
  if(head == nullptr)
  {
    cout << "[]" << endl;
  }
  else
  {
    curr = head;
    cout << "[";
    while(curr->next != nullptr)
    {
      cout << curr->data << ",";
      curr = curr->next;
    }
    cout << curr->data << "]" << endl;
    curr = nullptr;
  }
}
