window.onload = function() {
	var eprev = document.querySelector('.prev')
	var enext = document.querySelector('.next')
	var esico = document.getElementById('icolist').getElementsByTagName('li')
	var eicolist = document.querySelector('#icolist');
	var eimglist = document.querySelector('#imglist');
	var lift = 0;
	var timer;
	run();

	function run() {
		if (lift <= -4000) {
			lift = 0;
		}
		var m = Math.floor(-lift / 800);
		imglist.style.marginLeft = lift + 'px';
		var n = (lift % 800 == 0) ? n = 1500 : n = 10;
		lift -= 10;
		timer = setTimeout(run, n);
		icochange(m)
	}
	// 图片定位
	function imgchange(n) {
		let lt = -(n * 800);
		imglist.style.marginLeft = lt + 'px';
		lift = lt;
	}
	eprev.onclick = function() {
		let prevgo = Math.floor(-lift / 800) - 1;
		if (prevgo == -1) {
			prevgo = 3;
		}
		imgchange(prevgo);
	}
	enext.onclick = function() {
		let nextgo = Math.floor(-lift / 800) + 1;
		if (nextgo == 4) {
			nextgo = 0;
		}
		imgchange(nextgo);
	}

	function icochange(m) {
		for (let index = 0; index < esico.length; index++) {
			esico[index].style.backgroundColor = '';
		}
		if (m < esico.length) {
			esico[m].style.backgroundColor = 'red';
		}
	}
	eicolist.onclick = function() {
		var tg = event.target;
		let ico = tg.innerHTML - 1;
		imgchange(ico);
		icochange(ico);
	}
	eimglist.onmouseenter = function() {
		clearTimeout(timer);
	}
	eimglist.onmouseout = function() {
		run();
	}
}
