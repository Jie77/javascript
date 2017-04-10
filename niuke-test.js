
/*将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
1. rgb 中每个 , 后面的空格数量不固定
2. 十六进制表达式使用六位小写字母
3. 如果输入不符合 rgb 格式，返回原始输入 */
function rgb2hex(sRGB) {
    var a = /^rgb\((\d+)\,\s*(\d+)\,\s*(\d+)\)$/g;
    if(a.test(sRGB)){
        var str = '';
    	sRGB.replace(a,function(s,ele1,ele2,ele3){
        	str = '#'+h(ele1)+h(ele2)+h(ele3);
    	});
    	return str;
    }else{
        return sRGB;
    }
    
}
function h(num){
	var a = parseInt(num);
	if(a<16){
		return '0'+a.toString(16);
	}else{
		return a.toString(16);
	}
}
/*获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组 */
function getUrlParam(sUrl, sKey) {
    var res = {};
    sUrl.replace(/(\w+)=(\w+)/g,function(s,ele1,ele2){//ele代表着子表达式的捕获组，1就代表第一个子表达式
        if(res[ele1] !== void 0){//使用void 0 比undefine安全
            var t = res[ele1];
            res[ele1] = [].concat(t,ele2);//有多个元素的时候返回数组
        }else{
			res[ele1] = ele2;//只有一个参数的时候返回该元素
        }
    });
    if(sKey === void 0){//判断是否指出参数名
        return res;
    }else{
        return res[sKey] || '';//指出参数时返回数组或者‘’
    }
}
/*为 Array 对象添加一个去除重复项的方法    注意NaN的问题，NaN！=NaN*/
Array.prototype.uniq = function () {
    var res = [];
    var flag = true;
    for (var i=0;i<this.length;i++){
        if(this.indexOf(this[i])==i){
            res.push(this[i]);
        }else{
			if(this[i]!=this[i]){
				if(flag){
					res.push(this[i]);
                    flag = false;
                }
            }
        }
    }
    return res;
}
/*css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage    注意第一个字符是否是‘-’的问题*/
function cssStyle2DomStyle(sName) {
	var arr = sName.split('-');
    var narr = [];
    if(!arr[0]){
        arr.shift();
    }
    narr.push(arr[0]);
    for(var i=1;i<arr.length;i++){
        narr.push(turnUpper(arr[i]));
    }
    return narr.join('');
}
function turnUpper(str){
    return str[0].toUpperCase()+str.slice(1);
}

/*统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
1. 不限制 key 的顺序
2. 输入的字符串参数不会为空
3. 忽略空白字符    filter返回符合要求的数组*/
function count(str) {
	var o = {};
    var a = str.split('').filter(function(e){
        return e!=' ';
    })
    for(var i=0;i<a.length;i++){
		if(o[a[i]]){
            o[a[i]] ++;
        }else{
			o[a[i]] = 1;
        }
    }
    return o;
}