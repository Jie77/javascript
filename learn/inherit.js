/*
	实现一个继承
	Animal say
	Dog say: animal.say() + ' Dog'
*/

function Animal(){

}
Animal.prototype.say = function(){
		return "I'm animal"
	}

function Dog(){
	this.say = function(){
		return Animal.prototype.say.call(this) + " Dog"
	}
}

Dog.prototype = new Animal()

var animal = new Animal();
console.log(animal.say())

var dog = new Dog()

console.log(dog.say())