var taskNum = 0;
while (taskNum < 1 || taskNum > 2) {
				taskNum = prompt("Enter task number (1 or 2):");
				if (taskNum < 1 || taskNum > 2) {
								alert("Please enter a valid value!")
				}
}

if (+taskNum === 1) {
var numOfStars = 0;
while (numOfStars < 1 || numOfStars === "" || numOfStars === null) {
   numOfStars = prompt("Enter number of stars: ");
   if (numOfStars === "" || numOfStars === null) {
   				alert("Please enter a value!");
   }
   else if (numOfStars < 1) {
   				alert("Number cannot be less than 1!");
   }
   
}

for (var i = +numOfStars; i > 0; i--) {
				for (var j = 0; j < i; j++) {
								document.write("*");
								if (j+1 === i) {
												document.write("<br />");
								}
				}
}

}

else {
				var patternLines = 0;
				while (patternLines < 1 || patternLines === "" || patternLines === null) {
								patternLines = prompt("Enter number of lines for patterns:");
								if (patternLines === "" || patternLines === null){
												alert("Please enter a value!");
								}
								else if (patternLines < 1) {
												alert("Number of lines must be greater than 0!");
								}
				}
				
				patternLines = +patternLines;
				
				document.write("<h2>Pattern A</h2><br />")
				for (var i = 0; i < patternLines; i++) {
								for (var j = 0; j < 5; j++) {
												document.write("*");
												if (j === 4) {
																document.write("<br />");
												}
								}
				}
				
				document.write("<h2>Pattern B</h2><br />")
				for (var i = 0; i < patternLines; i++) {
								for (var j = -1; j < i; j++) {
												document.write("*");
												if (j+1 === i) {
																document.write("<br />");
												}
								}
				}
				
				document.write("<h2>Pattern C</h2><br />")
				for (var i = patternLines; i > 0; i--) {
								for (var j = 0; j < i; j++) {
												document.write("*");
												if (j+1 === i) {
																document.write("<br />");
												}
								}
				}
				
				document.write("<h2>Pattern D</h2><br />")
				for (var i = 0; i < patternLines; i++) {
								for (var j = -1; j < i; j++) {
												document.write("*");
												if (j+1 === i) {
																document.write("<br />");
												}
								}
				}
				for (var i = patternLines; i > 0; i--) {
								for (var j = 1; j < i; j++) {
												document.write("*");
												if (j+1 === i) {
																document.write("<br />");
												}
								}
				}
}