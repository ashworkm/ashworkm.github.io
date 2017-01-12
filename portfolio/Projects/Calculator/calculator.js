//initialize constants and global variables

MAXLENGTH = 23;
operator = [];
equation = "";

// display initial value of zero in calculator window
myWindow = document.getElementById("window");
myWindow.innerHTML = 0;

// function that displays keys entered by user in calculator window

function appendEntry () {
	var keys = document.querySelectorAll("button");
/*	var myWindow = document.getElementById("window");
	myWindow.innerHTML = equation; */

		for (i = 0; i < keys.length; i++) (function (i) {
			keys[i].addEventListener('click', function () {
			equation += keys[i].value;

			//check if length of equation exceeds the width of the window

			if (equation.length <= MAXLENGTH) {
				myWindow.innerHTML = equation;
				console.log(equation);
				return equation;
			}
		}
	)}) (i);
} 

// function that determines what operation to perform

function operation () {
	var operators = document.querySelectorAll(".operator");
	
	for (i = 0; i < operators.length; i++) ( function (i) {
		operators[i].addEventListener('click', function () {
			operator.push(operators[i].value);
			return operator;
		})

	}) (i);

}

// need to allow for user input using number keys.

// call functions

appendEntry();
operation();