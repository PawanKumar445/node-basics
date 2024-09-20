class Company {
  constructor(name, age) {
    console.log('I am Company constructor()');
    
    // console.log("This in Company:", this);// {}, empty object logs
    this.name = name;
    this.age = age;
    // console.log(`This in Company after assignment:`, this); object with values
  }

  login() {
    console.log(`Employee has logged in!!: ${this.name}`);
  }

  logout() {
    console.log(`Employee has logged out!!: ${this.name}`);
  }

  message(){
    console.log(`I work in this company: ${this.name}`);
  }

  verifyEmail(email){
    console.log(`This is a valid email!!!`);
    
  }
}

class Employee1 extends Company{
  constructor(name,age){
    super(name,age,true);// ignores the 3rd agr i.e `true`, no error 
    // console.log(`In Emp1 constructor:`,this);
    // super(name,age);// must be called before accessing this keyword, otherwise error
  }
  message(){
    super.message();
    console.log(`I am a software developer!!`);
  }

  verifyEmail(email){
    super.verifyEmail(email);
    console.log(`Hi I am ${this.name} and my email has been verified!`);
  }

  skills(){
    console.log(`I am a javascript backend developer!!!`);
    
  }
}

const emp1= new Employee1('Rahul',55);
emp1.login();
emp1.message();
emp1.verifyEmail('employee1@email.com');
emp1.skills();