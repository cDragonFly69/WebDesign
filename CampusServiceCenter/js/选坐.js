window.onload = function() {
	function yes() {
		var x = 100,y = 500;			
		var num = (Math.round(Math.random() * (y - x) + x));
		alert('已为你预约到' + num + '号座位');
	}

	function no() {
		alert("期待你的下次光临");
		window.history.go(-1);
	}
	
	var aBtn = document.getElementsByTagName('input');
	aBtn[0].onclick = yes;
	aBtn[1].onclick = no;
}
