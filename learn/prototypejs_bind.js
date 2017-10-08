Function.prototype.bind = function(){
	var args = Array.prototype.slice.call(arguments);
	var obj = args.shift();
	var self = this;
	return function(){
		return self.apply(obj,args.concat(Array.prototype.slice.call(arguments)));
	}
}
function test(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}
obj = {}
test1 = test.bind(obj, 456)
test1(123)
console.log(obj.num1)
console.log(obj.num2)