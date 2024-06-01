var person = {
  age: 28,
  greet1: function(){
    console.log("greet1",this);
    console.log("greeet1",this.age);
    function greet2() {
      console.log("greet2",this);
      console.log("greet2",this.age);
    }
    const greet3 =()=> {
      console.log("greet 3",this);
      console.log("greet 3",this.age);
    };
    greet2();
    greet3();
  },
};
let person1={
  age:50,
};
person.greet1.call(person1);
person.greet1();