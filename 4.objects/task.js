///Задание 1
function Student(name, gender, age) {

  this.name = name;      
  this.gender = gender;    
  this.age = age;        
  this.marks = [];    
}

///Задание 2
Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;     
}

///Задание 3
Student.prototype.addMarks = function (...marks) {
  
  if (!this.marks) {
    return;
  }

  for (let i = 0; i < marksToAdd.length; i++) {
    this.marks.push(marksToAdd[i]);
  }  
  
}

///Задание 4
Student.prototype.getAverage = function () {

  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  
  return sum / this.marks.length;  
}

///Задание 5
Student.prototype.exclude = function (reason) {
  
  delete this.subject;
  delete this.marks;

  this.excluded = reason;  
}
