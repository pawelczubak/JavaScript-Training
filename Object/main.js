let student = {
    first: 'Ralf',
    last: 'Carlos',
    age: 25,
    height: 183,

    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }


};
console.log(student.first);
console.log(student.last);
student.first = 'John'; // change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());