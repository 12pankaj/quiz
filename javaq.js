function quizja(y) {
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
			qus.innerText="Q "+(q+1)+". Who invented Java Programming?"
				ana.innerText=" Guido van Rossum"
				anb.innerText=" James Gosling"
				anc.innerText=" Dennis Ritchie"
				and.innerText=" Bjarne Stroustrup"
			correct=1; 	
		break;
		case 2:
			qus.innerText="Q "+(q+1)+". Which statement is true about Java?"
				ana.innerText=" Java is a sequence-dependent programming language"
				anb.innerText=" Java is a code dependent programming language"
				anc.innerText=" Java is a platform-dependent programming language"
				and.innerText=" Java is a platform-independent programming language"
		correct=3; 	
		break;
		case 3:
			qus.innerText="Q "+(q+1)+". What is the extension of java code files?"
				ana.innerText=" .js"
				anb.innerText=" .txt"
				anc.innerText=" .class"
				and.innerText=" .java"
		correct=3; 	
		break;
		case 4:
			qus.innerText="Q "+(q+1)+". What will be the output of the following Java code?\n    class increment {\n public static void main(String args[]) \n        {        \n             int g = 3;\n             System.out.print(++g * 8);\n      } "
				ana.innerText=" 32"
				anb.innerText=" 33"
				anc.innerText=" 24"
				and.innerText=" 25"
		correct=0; 	
		break;
		case 5:
			qus.innerText="Q "+(q+1)+". Which of the following is not an OOPS concept in Java?"
				ana.innerText=" Polymorphism"
				anb.innerText=" Inheritance"
				anc.innerText=" Compilation"
				and.innerText=" Encapsulation"
		correct=2; 	
		break;
		case 6:
			qus.innerText="Q "+(q+1)+". Which of the following is a type of polymorphism in Java Programming?"
				ana.innerText=" Multiple polymorphism"
				anb.innerText=" Compile time polymorphism"
				anc.innerText=" Multilevel polymorphism"
				and.innerText=" Execution time polymorphism"
		correct=1; 	
		break;
		case 7:
			qus.innerText="Q "+(q+1)+". Which of these are conditional statements in Java?"
				ana.innerText=" break"
				anb.innerText=" continue"
				anc.innerText=" for()"
				and.innerText=" if()"
		correct=3; 	
		break;
		case 8:
			qus.innerText="Q "+(q+1)+". Which one of the following is not an access modifier?"
				ana.innerText=" Protected"
				anb.innerText=" Void"
				anc.innerText=" Public"
				and.innerText=" Private"
		correct=1; 	
		break;
		case 9:
			qus.innerText="Q "+(q+1)+". Which of the following is not a Java features?"
				ana.innerText=" Dynamic"
				anb.innerText=" Architecture Neutral"
				anc.innerText=" Use of pointers"
				and.innerText=" Object-oriented"
		correct=2; 	
		break;
		case 10:
			qus.innerText="Q "+(q+1)+". Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?"
				ana.innerText=" javap tool"
				anb.innerText=" javaw command"
				anc.innerText=" Javadoc tool"
				and.innerText=" javah command"
		correct=2; 	
		break;
		case 11:
			 qus.innerText="Q "+(q+1)+". Which of the following for loop declaration is not valid?"
				 ana.innerText=" for ( int i = 99; i >= 0; i / 9 )"
				 anb.innerText=" for ( int i = 7; i <= 77; i += 7 )"
				 anc.innerText=" for ( int i = 20; i >= 2; - -i )"
				 and.innerText=" for ( int i = 2; i <= 20; i = 2* i )"
		correct=0; 	
		break;
		case 12:
			qus.innerText="Q "+(q+1)+". Which data type is used to create a variable that should store text?"
				ana.innerText=" myString	"
				anb.innerText=" text	"
				anc.innerText=" string	"
				and.innerText=" String "
			correct=3; 	
		break;
		case 13:
			qus.innerText="Q "+(q+1)+". Which method can be used to find the length of a string?	 "
				ana.innerText=" getLength()	 "
				anb.innerText=" getSize() "
				anc.innerText=" length() "
				and.innerText=" len()"
			correct=2; 	
		break;

		}
	}