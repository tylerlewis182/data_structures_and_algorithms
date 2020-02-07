/*

ES2015 Class Syntax

Become familiar with JS class syntax.

*/

// Student
class Student
{
  // constructor
  constructor(firstName, lastName, year)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    Student.count += 1;
  }

  fullName()
  {
    let fullName = `${this.firstName} ${this.lastName}`;
    console.log(fullName);
    return fullName;
  }
}

// Student class attributes
Student.count = 0;


let student1 = new Student("John", "Doe", 3);
let student2 = new Student("Jane", "Smith", 1);
let student3 = new Student("Jane", "Smith", 1);
student1.fullName();
console.log(Student.count);
