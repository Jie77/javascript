function sing(index){
	var lis = $('li .clearfix').parent()
	var arr = []
	for (var j = 0;j<lis.length;j++){
		arr.push(lis.eq(j).data("song").FileHash)
	}
	$.get('http://www.kugou.com/yy/index.php',{r:'play/getdata',hash:arr[index-1]},function(res){
		var data = JSON.parse(res);
		var url = data.data.play_url;
		window.location.href = url;
	})
}

