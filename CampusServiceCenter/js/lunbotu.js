window.onload=function(){
	setInterval(change,2000)
}
var count=1;
function change(){
	var img=document.getElementById("imgid")
	img.src="../img/"+count+".jpg"
	count++
	if(count>5){
		count=1
	}
}