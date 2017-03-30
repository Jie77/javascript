var value = [0,6,3,5,4,6];//每件物品的价值
var weight = [0,2,2,6,5,4];//每件物品的重量
var W = 10;//总重量
var f = [];
for (var i=0;i<value.length;i++){
	f[i] = [];
	for(var j =0;j<W;j++){
		f[i][j] = 0;
	}
}

for(i=1;i<value.length;i++){
	for(j=1;j<=W;j++){
		if(j<weight[i]){//判断物品的质量是否超过背包总重
			f[i][j] = f[i-1][j];
		}else{//递推公式
			var a = f[i-1][j];
			var b = f[i-1][j-weight[i]]+value[i];
			//寻找减去第i个物品重量的最优解，加上第i个物品的价值，（i个物品是最优解，i-1个物品也是最优解），与不加第i个物品做比较
			f[i][j] = a>b?a:b;
		}
	}
}

console.log(f[value.length-1][W-1]);