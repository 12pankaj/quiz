function quizpy(y) {
		quizssh.style="display:;"
		menu.style="display:none;"
		let n=0;
		while(n!=4){
			ans[n].classList.remove("form-check-input","bg-danger");
			ans[n].classList.remove("form-check-input","bg-success");
			ans[n].checked=false;n++}
		re=1;
	switch(arr1[q])
	{
			case 1:
				qus.innerText="Q "+(q+1)+". Which of the following is the correct extension of the Python file?"
					ana.innerText=" .python"
					anb.innerText=" .pl"
					anc.innerText=" .py"
					and.innerText=" .p"
				correct=2; 	
			break;
			case 2:
				qus.innerText="Q "+(q+1)+". Who developed Python Programming Language?"
				  	ana.innerText=" Wick van Rossum"
				  	anb.innerText=" Rasmus Lerdorf"
				  	anc.innerText=" Guido van Rossum"
				  	and.innerText=" Niene Stom"
				correct=2; 	
			break;
			case 3:
				qus.innerText="Q "+(q+1)+". Which type of Programming does Python support?"
					ana.innerText=" object-oriented programming"
					anb.innerText=" structured programming"
					anc.innerText=" functional programming"
					and.innerText=" all of the mentioned "
				correct=2; 	
			break;
			case 4:
				 qus.innerText="Q "+(q+1)+". Is Python case sensitive when dealing with identifiers?"
					 ana.innerText=" no"
					 anb.innerText=" yes"
					 anc.innerText=" machine dependent"
					 and.innerText=" none of the mentioned"
				correct=1; 	
			break;
			case 5:
				qus.innerText="Q "+(q+1)+". Is Python code compiled or interpreted?"
					ana.innerText=" Python code is both compiled and interpreted"
					anb.innerText=" Python code is neither compiled nor interpreted"
					anc.innerText=" Python code is only compiled"
					and.innerText=" Python code is only interpreted"
				correct=0; 	
			break;
			case 6:
				qus.innerText="Q "+(q+1)+". All keywords in Python are in _________"
					ana.innerText=" Capitalized"
					anb.innerText=" lower case"
					anc.innerText=" UPPER CASE"
					and.innerText=" None of the mentioned"
				correct=3; 	
			break;
			case 7:
				qus.innerText="Q "+(q+1)+". What will be the value of the following Python expression?\n4 + 3 % 5"
					ana.innerText=" 7"
					anb.innerText=" 2"
					anc.innerText=" 4"
					and.innerText=" 1"
				correct=0; 	
			break;
			case 8:
				qus.innerText="Q "+(q+1)+". Which of the following is used to define a block of code in Python language?"
					ana.innerText=" Indentation"
					anb.innerText=" Key"
					anc.innerText=" Brackets"
					and.innerText=" All of the mentioned	"
				correct=0; 	
			break;
			case 9:
				qus.innerText="Q "+(q+1)+". Which keyword is used for function in Python language?"
					ana.innerText=" Function"
					anb.innerText=" def"
					anc.innerText=" Fun"
					and.innerText=" Define	"
				correct=1; 	
			break;
			case 10:
				qus.innerText="Q "+(q+1)+". Which of the following character is used to give single-line comments in Python?"
					ana.innerText=" //"
					anb.innerText=" #"
					anc.innerText=" !"
					and.innerText=" /*"
				correct=1; 	
			break;
			case 11:
				qus.innerText="Q "+(q+1)+". What will be the output of the following Python code?\ni = 1\nwhile True:\n\t    if i%3 == 0:\n\t\t        break\n\t    print(i)\n \n\t    i + = 1"
					ana.innerText=" 1 2 3"
					anb.innerText=" error"
					anc.innerText=" 1 2"
					and.innerText=" none of the mentioned"
				correct=1; 	
			break;
			case 12:
				qus.innerText="Q "+(q+1)+". What is the order of precedence in python?"
					ana.innerText=" Exponential, Parentheses, Multiplication, Division, Addition, Subtraction"
					anb.innerText=" Exponential, Parentheses, Division, Multiplication, Addition, Subtraction"
					anc.innerText=" Parentheses, Exponential, Multiplication, Division, Subtraction, Addition"
					and.innerText=" Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
				correct=3; 	
			break;
			case 13:
				qus.innerText="Q "+(q+1)+". What will be the output of the following Python code snippet if x=1?\nx<<2"
					ana.innerText=" 4"
					anb.innerText=" 2"
					anc.innerText=" 1"
					and.innerText=" 8"
				correct=0; 	
			break;

	}
}