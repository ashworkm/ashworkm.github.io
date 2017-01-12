function calculate () {
	var equation = "";
	//console.log(button.value())
	var keys = document.querySelectorAll("button");
		for (i = 0; i < keys.length; i++) (function(i) {
			keys[i].addEventListener('click', function() {
			equation += keys[i].value;
			console.log(equation);
			return equation;
		}
	)}) (i);


	/*	for (i = 0; i < keys.length; i++) (function(i) {
			keys[i].onClick = function() {
			equation += keys[i].value;
			console.log(equation);
			return equation;
	}
}) (i); */

	/*var keys = document.querySelectorAll("span")innerHTML;

	for (i = 0; i < keys.length; i++) {
	//	console.log(keys[i].innerHTML);
		console.log(keys[i].innerHTML);
		var equation = "";
		(keys[1]).onClick=function() {
			equation += keys[i];
		/*	equation += keys[i];
			console.log(equation);
			document.getElementByID("window").innerHTML = equation;
			return equation; 
			console.log(equation); 
		} 
	} */
}

/*	for (i = 0; i < keys.length; i++) {
	//	console.log(keys[i].innerHTML);
		keys[i].onClick=appendToWindow(key[i]);
			//equation += keys[i];
			//return equation;
		}	
	}
	console.log(equation); */


calculate();