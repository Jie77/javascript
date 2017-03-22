//----------------------set and get function-----------------------------
  /*var book = {
    _year : 2004,
    edition : 1
  };

  Object.defineProperty(book,"year",{
    get:function(){
      return this._year;
    },
    set:function(newValue){
      if(newValue>2004){
        this.edition += newValue - 2004;
        this._year = newValue;
      }
    }
  });*/

  //----------------------------工厂模式--------------------------------

  /*function creatPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
      console.log(this.name);
    };
    return o;
  }

  var person1 = creatPerson("jiangjie",20,"student");
  var person2 = creatPerson("lukexin",20,"student");
  */
  //----------------------------构造函数模式--------------------tip1:不同实例上的同名函数是不相同的

  /*function Person(name,age,job){//构造器
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
      console.log(this.name);
    }
  }
  var person1 = new Person('jiangjie',20,'student');
  var person2 = new Person('likexin',20,'student');*/

  //----------------------------原型模式---------------------tip1:hasOwnPrototype;  tip2:isPrototypeOf tip3:getProtptypeOf-----------

 /* function Person(){}

  Person.prototype.name = "jiangjie";
  Person.prototype.age = 20;
  Person.prototype.job = "student";
  Person.prototype.sayName = function(){
    console.log(this.name);
  }

  var person1 = new Person();
  var person2 = new Person();

  person1.name = "lukexin";
  console.log(person1.name);//lulexin  来自实例
  console.log(person2.name);//jiangjie  来自原型

  delete person1.name;
  console.log(person1.name);//jiangjie 来自原型
*/


/*  function Person(){}

  Person.prototype = {
    name:"jiangjie",
    age:20,
    job:"student",
    sayName:function(){
      console.log(this.name);
    }
  };

  Object.defineProperty(Person.prototype,'constructor',{
    enumerable:false,
    value:Person
  });

  var person1 = new Person();
*/

//------------------------------构造函数和原型模式---------------------------

/*  function Person(name,age,job){
    this.name = name,
    this.age = age,
    this.job = job,
    this.friend = ["zz","xx"];
  }

  Person.prototype = {
    sayName : function(){
      console.log(this.name);
    }
  }

  Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
  });
  
  var person1 = new Person('jaingjie',20,'student');
  var person2 = new Person('lukexin',20,'student');

*/
//-----------------------------动态原型模式----------------------------------

/*  function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    if(typeof this.sayName != "function"){
      Person.prototype.sayName = function(){
        console.log(this.name);
      };
    }
  }
  
var person = new Person("jiangjie",20,"student");

*/


//-----------------------------寄生构造器模式---------------------------------

  /*function Person(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
      console.log(this.name);
    };
    return o;
  }

  var person = new Person("jiangjie",20,"student");
  */

  //for example:
  /*function SpecialArray(){
    var values = new Array();
    values.push.apply(values,arguments);
    values.toPidString = function(){
      return this.join('|');
    };
    return values;
  }

  var color = new SpecialArray('red','green','gray');
  */


//----------------------------稳妥构造函数模式--------------------------------


  /*function Person(name,age,job){
    var o = new Object();
    
  //在这定义私有变量或者函数

    o.sayName = function(){
      console.log(o.name);
    };
    return o;
  }  

  var person = Person("jiangjie",20,"student");
  */
