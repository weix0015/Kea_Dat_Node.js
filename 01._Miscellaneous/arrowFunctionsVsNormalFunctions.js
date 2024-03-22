class Person {
  constructor(name) {
    this.name = name;
  }

  normalFunctionGetName() {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  }

  arrpwFunctionGetName() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  }
}

const person = new Person("Wei");
person.normalFunctionGetName();
person.arrpwFunctionGetName();
