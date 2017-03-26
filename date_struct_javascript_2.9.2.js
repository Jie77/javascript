function Words(){
	this.list = [];
}
Words.prototype.add = function(ele){
	this.list.push(ele);
}
Words.prototype.show = function(){
	this.list.forEach(function(e){
		console.log(e);
	})
}
function re(str){
	var s = [];
	var b = str.split('');
	for(var i=0;i<str.length;i++){
		s.push(b.pop());
	}
	return s.join('');
}
Words.prototype.Reverse = function(){
	return this.list.map(re);
} 

var w = new Words();

w.add("asd");
w.add("fgh");
w.show();
var new_w = new Words();
new_w.list = w.Reverse();
new_w.show();
