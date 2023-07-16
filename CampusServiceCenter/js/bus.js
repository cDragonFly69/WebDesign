function bus(){
	if (confirm("你确定选择汽车吗？")){
		var flag = prompt("你要去省内还是省外");
		if (flag == '省内'){
			alert("请在出行当天前往指定地点乘车！");
		}else if(flag == '省外'){
			alert("由于路途遥远，请准备好食物和水，祝你路途愉快!");
		}else{
			alert("请重新选择，谢谢");
		}
	}
		
}
function rail(){
	if (confirm("你确定选择高铁吗？")){
		var flag = prompt("你要去省内还是省外");
		if (flag == '省内'){
			alert("请在出行当天前往指定地点乘车！");
		}else if(flag == '省外'){
			alert("由于路途遥远，请准备好食物和水，祝你路途愉快!");
		}else{
			alert("请重新选择，谢谢");
		}
	}
		
}
function train(){
	if (confirm("你确定选择火车吗？")){
		var flag = prompt("你要去省内还是省外");
		if (flag == '省内'){
			alert("请在出行当天前往指定地点乘车！");
		}else if(flag == '省外'){
			alert("由于路途遥远，请准备好食物和水，祝你路途愉快!");
		}else{
			alert("请重新选择，谢谢");
		}
	}
		
}