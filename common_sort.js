function swap(arr,index1,index2){
	var t = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = t;
}
function Sarray(num){
	this.nums = [];
	this.num = num;
}
Sarray.prototype.init = function() {
	for (i=0;i<this.num;i++){
		this.nums.push(Math.floor(Math.random()*(this.num+1)));
	}
};
Sarray.prototype.bubbleSort = function(){
	for (var i=this.nums.length;i>1;i--){
		for (var j=0;j<i;j++){
			if(this.nums[j]>this.nums[j+1]){
				swap(this.nums,j,j+1);
			}
		}
	}
}
Sarray.prototype.selectionSort = function(){
	for (var i=0;i<this.nums.length-1;i++){
		var min = i;
		for (var j=i+1;j<this.nums.length;j++){
			if(this.nums[min]>this.nums[j]){
				min = j;
			}
		}
		if(min!=i){
				swap(this.nums,i,min);
			}
	}
}
Sarray.prototype.insertSort = function(){//默认0号位置有序
	for (var i=1;i<this.nums.length;i++){
		var tem = this.nums[i];
		var j = i;
		while(this.nums[j-1]>tem&&j>0){
			this.nums[j] = this.nums[j-1];
			j--;
		}
		this.nums[j] = tem;
	}
}
var n=10000;
var a = new Sarray(n);
var b = new Sarray(n);
var c = new Sarray(n);
a.init();
b.init();
c.init();
var start = new Date().getTime();
a.bubbleSort();
var end = new Date().getTime();
console.log("冒泡排序用时:"+(end-start)+"ms");
start = new Date().getTime();
b.selectionSort();
end = new Date().getTime();
console.log("选择排序用时:"+(end-start)+"ms");
start = new Date().getTime();
c.insertSort();
end = new Date().getTime();
console.log("插入排序用时:"+(end-start)+"ms");