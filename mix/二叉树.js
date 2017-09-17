function Node(data,left,right){//node节点对象
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = function(){
		return this.data;
	}
}
function BST(){
	this.root = null;//首先设根节点为空
	this.insert = function(data){
		var n = new Node(data,null,null);//初始化新的节点
		if(this.root==null){//判断根节点是否为空
			this.root = n;//如果为空把传入的新节点设为根节点
		}else{
			var current = this.root;//设当前节点为根节点
			var parent;
			while(true){
				parent = current;//首先让父节点等于当前节点
				if(data<current.data){
					current = current.left;
					if(current==null){
						parent.left = n;//让父节点的左指针指向新节点
						break;
					}
				}else{
					current = current.right;
					if(current==null){
						parent.right = n;
						break;
					}
				}
			}
		}
	}
	this.inOrder = inOrder;
}
function inOrder(node){//中序遍历
	if(node!=null){
		inOrder(node.left);
		console.log(node.show()+" ");
		inOrder(node.right);
	}
}
var bst = new BST();
var arr = [56,22,81,10,30,77,92];
arr.forEach(function(ele){
	bst.insert(ele);
});

inOrder(bst.root);