var eventUtil = {
	addHandler:function(ele,type,handler){
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false);
		}else if(ele.attachEvent){
			ele.attachEvent("on"+type,handler);
		}else{
			ele["on"+type] = handler;
		}
	},
	removeHandler:function(ele,type,handler){
		if(ele.removeEventListener){
			ele.removeEventListener(type,handler,false);
		}else if(ele.detachEvent){
			ele.detachEvent("on"+type,handler);
		}else{
			ele["on"+type] = null;
		}
	}
};

function ajaxRequest(){
	var request = null;
	try{
		request = new XMLHttpRequest();
	}catch(e1){
		try{
			request = new ActiveXObject("Msxml2.XMLHttp");
		}catch(e2){
			try{
				request = new AvtiveXObject("Microsoft.XMLHttp");
			}catch(e3){
				request = null;
				console.log("createXMLHttp failed");
			}
		}
	}
	return request;
}

var xhr = new ajaxRequest();
var btn = document.getElementById('btn');
var data;
eventUtil.addHandler(btn,"click",function(){
	xhr.open('post','/work',true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log(JSON.parse(xhr.responseText));
			data = JSON.parse(xhr.responseText);
			canvasApp();
		}
	}
	xhr.send(null);
});

function canvasApp(){
	var theCanvas = document.getElementById('canvas');
	var context = theCanvas.getContext('2d');
	drawScreen();
	function drawScreen(){
		var color = ["#D713DD","#1ABFE6","#12B644","#EAD930","#EB4F22"];
		var num = [];
		for(var i in data){
			num.push(data[i]);
		}
		var sum = 0;
		for(var i=0;i<num.length;i++){
			sum += num[i];
		}
		var newNum = num.map(function(ele){
			return ele/sum;
		});
		for(var i=0;i<newNum.length-1;i++){
			newNum[i+1] = newNum[i+1]+newNum[i];
		}
		var startAngle = newNum.map(function(ele){
			return 2*Math.PI*ele;
		});
		startAngle.pop();
		startAngle.unshift(0);
		var endAngle = newNum.map(function(ele){
			return 2*Math.PI*ele;
		});
		endAngle.pop();
		endAngle.push(0);
		for(var i=0;i<newNum.length;i++){
			context.fillStyle = color[i%color.length];
			context.strokeStyle = "#000";
			context.beginPath();
			context.moveTo(250,250);
			context.arc(250,250,100,startAngle[i],endAngle[i],false);
			context.lineTo(250,250);
			context.stroke();
			context.fill();
			context.closePath();
		}
	}
}








