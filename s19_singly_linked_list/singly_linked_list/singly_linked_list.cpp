#include "singly_linked_list.h"
#include <iostream>
using namespace std;


// constructor
List::List()
{
  head = nullptr;
  curr = nullptr;
  temp = nullptr;
}


// add_node to the end of the list
void List::add_node(int add_data)
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
}


// delete the first list item whos data matches del_data
void List::delete_node(int del_data)
{
  // if the list is empty, return
  if(head == nullptr)
  {
    // cout << "returned..." << endl;
    return;
  }

  // if the first item in the list matches del_data
  if(head->data == del_data)
  {
    temp = head->next;
    delete head;
    head = temp;
    return;
  }

  // else
  curr = head;
  while(curr->next != nullptr)
  {
    // check if next item's data equals del_data
    if(curr->next->data == del_data)
    {
      // delete the node from the list
      temp = curr->next->next;
      delete curr->next;
      curr->next = temp;
      curr = nullptr;
      temp = nullptr;
      return;
    }
  }
}


// print
void List::print()
{
  // if the list is empty
  if(head == nullptr)
  {
    cout << "[ ]" << endl;
  }
  else
  {
    curr = head;
    cout << "[ ";
    while(curr->next != nullptr)
    {
      cout << curr->data << ", ";
      curr = curr->next;
    }
    cout << curr->data << " ]" << endl;
    curr = nullptr;
  }
}
