function curry(fn){
	var args = Array.prototype.slice.call(arguments,1);
	console.log(args);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finnerArgs = args.concat(innerArgs);
		console.log(finnerArgs);
		return fn.apply(null,finnerArgs);
	}
}

function add(num1,num2){
	return num1+num2;
}

var curryAdd = curry(add,2);
console.log(curryAdd(3));