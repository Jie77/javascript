//---------------------------原型链-------------------------------------------

  /*function SuperType(){
    this.property = true;
  }

  SuperType.prototype.getSuperValue = function(){
    console.log(this.property);
  }

  function SubType(){
    this.subproperty = false;
  }

  SubType.prototype = new SuperType();

  SubType.prototype.getSubValue = function(){
    console.log(this.subproperty);
  }

  var instance = new SubType();

  console.log(instance.getSuperValue());//true

  console.log(instance.constructor);//SuperType

  */

//---------------------------------借用构造函数-----------------------------------

  /*function SuperType(name){
    this.name = name;
  }

  function SubType(){
    SuperType.call(this,"jiangjie");
    this.age = 20;
  }

  var instance = new SubType();

  console.log(instance.name);//jiangjie
  console.log(instance.age);//20

  console.log(instance.constructor);//Subtype
  console.log(Object.getPrototypeOf(instance)==SubType.prototype);//true

  console.log(instance.hasOwnProperty("name"));//true
  */


//---------------------------------组合继承--------------------------------------

  function SuperType(name){
    this.color = ['red','black','white'];
    this.name = name;
  }


  SuperType.prototype.sayName = function(){
    console.log(this.name);
  }

  function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
  }

  SubType.prototype = new SuperType();

  SubType.prototype.sayAge = function(){
    console.log(this.age);
  }

  var instance1 = new SubType('jaingjie','20');
  var instance2 = new SubType('lukexin','20');

  instance1.color.push('green');
  console.log(instance1.color);//['red','black','white','green'];
  console.log(instance1.sayName());//jiangjie
  console.log(instance1.sayAge());//20

  console.log(instance2.color);//['red','black','white'];
  console.log(instance2.sayName());//lukexin
  console.log(instance2.sayAge());//20