
	

	
	// console.log(reg1.test('111111111'));
	function phoneNum() {
		var val1 = document.getElementById("text1").value;
		var text1 = document.getElementsByTagName("span")[0];
		var reg1 = /^1[3-8]{1}[1-8]{1}\d{8}$/;
		if (reg1.test(val1)) {
			text1.innerText = "输入正确！";
			text1.className = "green";
		}else if(val1.length != 11){
			text1.innerText = "请输入11位手机号";
			text1.className = "red";
		}else {
			text1.innerText = "请输入正确手机号";
			text1.className = "red";
		}
		
		console.log(val1);
	}
	function repeat(){
		var val2 = document.getElementById("text2").value;
		var text2 = document.getElementsByTagName("span")[1];
		var reg2 = /\b(\w+)\b\s+\1\b/;
		console.log(val2);
		if(reg2.test(val2)){
			text2.innerText = "出现两个相邻且重复的单词";
			text2.className = "red";
		}else {
			text2.innerText = "没有出现两个相邻且重复的单词";
			text2.className = "green";
		}
	}