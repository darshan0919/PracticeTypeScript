// Interface with class
interface UserInterface {
  name: string;
  age: number;
  email: string;
  login();
}

class User implements UserInterface {
  public name: string;
  age: number;
  email: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.email = "Blah.com";
    console.log("Congrats", name, "for being our new user!");
  }
  login() {
    console.log(this.name, "is logged in now!");
  }
}

let Darshan = new User("Darshan Patel", 21);
console.log(Darshan.name); //no error
console.log(Darshan.email); //error if data type of set private or protected.

Darshan.login();

// Inheritance
class Member extends User {
  id: number;
  constructor(name: string, age: number) {
    super(name, age);
    this.id = 1;
  }
}
