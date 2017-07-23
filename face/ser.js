var https = require('https');
var url = require('url');
var time = new Date();
var fs = require('fs');

var http_url = 'https://api-cn.faceplusplus.com/facepp/v3/detect';
var key = "n303kG3cdv43J8RuJ5nt5H7hU3IAZWhU";
var secret = "grl4t7FC9R6-JsTIFZ-rps9xjN_VKT3_";
var attributes = "gender,eyestatus,ethnicity,emotion";
var landmark = "1";
var boundarykey = '----------' + time.getTime().toString(16);
var data = [];
data.push('--'+boundarykey);
data.push('Content-Disposition: form-data; name="api_key"\r\n');
data.push(key);
data.push('--'+boundarykey);
data.push('Content-Disposition: form-data; name="api_secret"\r\n');
data.push(secret);
data.push('--'+boundarykey);
data.push('Content-Disposition: form-data; name="return_attributes"\r\n');
data.push(attributes)
data.push('--'+boundarykey);
data.push('Content-Disposition: form-data; name="return_landmark"\r\n');
data.push(landmark)
data.push('--'+boundarykey);
data.push('Content-Disposition: form-data; name="image_base64"\r\n');
data.push(fs.readFileSync('./lin.jpg').toString("base64"));
data.push('--'+boundarykey+'--\r\n');
var http_body = data.join('\r\n');
//console.log(http_body);
var options = url.parse(http_url);
options.method = "POST";
options.headers = {
	'Content-Type' : 'multipart/form-data; boundary='+boundarykey
}
//console.log(options);
var req = https.request(options,function(res){
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	});
});

req.write(http_body);
req.end();
req.on('error',function(e){
	console.log("EORROR:"+e);
})



