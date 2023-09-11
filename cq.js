function quizc(y) {
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
			qus.innerHTML="Q "+(q+1)+". Who is the father of C language?"
				ana.innerHTML=" Steve Jobs"
				anb.innerHTML=" James Gosling"
				anc.innerHTML=" Dennis Ritchie"
				and.innerHTML=" Rasmus Lerdorf"
		correct=2; 	
		break;
		case 2:
			qus.innerHTML="Q "+(q+1)+". Which of the following is not a valid C variable name?"
				ana.innerHTML=" int number;"
				anb.innerHTML=" float rate;"
				anc.innerHTML=" int variable_count;"
				and.innerHTML=" int $main;	  "
		correct=3; 	
		break;
		case 3:
			qus.innerHTML="Q "+(q+1)+". All keywords in C are in ____________"
				ana.innerHTML=" LowerCase letters"
				anb.innerHTML=" UpperCase letters"
				anc.innerHTML=" CamelCase letters"
				and.innerHTML=" None of the mentioned	  "
		correct=0; 	
		break;
		case 4:
			qus.innerHTML="Q "+(q+1)+". Which of the following is true for variable names in C?"
				ana.innerHTML=" They can contain alphanumeric characters as well as special characters"
				anb.innerHTML=" It is not an error to declare a variable to be one of the keywords(like goto, static."
				anc.innerHTML=" Variable names cannot start with a digit"
				and.innerHTML=" Variable can be of any length"
		correct=2; 	
		break;
		case 5:
			qus.innerHTML="Q "+(q+1)+". Which is valid C expression?"
				ana.innerHTML=" int my_num = 100,000;"
				anb.innerHTML=" int my_num = 100000;"
				anc.innerHTML=" int my num = 1000;"
				and.innerHTML=" int $my_num = 10000;"
		correct=1; 	
		break;
		case 6:
			qus.innerHTML="Q "+(q+1)+". Which of the following declaration is not supported by C language?"
				ana.innerHTML=" String str;"
				anb.innerHTML=" char *str;"
				anc.innerHTML=" float str = 3e2;"
				and.innerHTML=" Both “String str;” and “float str = 3e2;”"
		correct=0; 	
		break;
		case 7:
			qus.innerHTML="Q "+(q+1)+". What is the result of logical or relational expression in C?"
				ana.innerHTML=" True or False"
				anb.innerHTML=" 0 or 1"
				anc.innerHTML=" 0 if an expression is false and any positive number if an expression is true"
				and.innerHTML=" None of the mentioned"
		correct=1; 	
		break;
		case 8:
			qus.innerHTML="Q "+(q+1)+". What is an example of iteration in C?"
				ana.innerHTML=" for"
				anb.innerHTML=" while"
				anc.innerHTML=" do-while"
				and.innerHTML=" all of the mentioned"
		correct=3; 	
		break;
		case 9:
			qus.innerHTML="Q "+(q+1)+". Functions can return enumeration constants in C?"
				ana.innerHTML=" true"
				anb.innerHTML=" false"
				anc.innerHTML=" depends on the compiler"
				and.innerHTML=" depends on the standard"
		correct=0; 	
		break;
		case 10:
			qus.innerHTML="Q "+(q+1)+". scanf() is a predefined function in______header file."
				ana.innerHTML=" stdlib. h"
				anb.innerHTML=" ctype. h"
				anc.innerHTML=" stdio. h"
				and.innerHTML=" stdarg. h"
		correct=2; 	
		break;
		case 11:
			qus.innerHTML="Q "+(q+1)+". Which of following is not accepted in C?"
				ana.innerHTML=" static a = 10; //static as"
				anb.innerHTML=" static int func (int); //parameter as static"
				anc.innerHTML=" static static int a; //a static variable prefixed with static"
				and.innerHTML=" all of the mentioned"
			correct=2; 	
		break;
		case 12:
			qus.innerHTML="Q "+(q+1)+". What is #include <stdio.h>?"
				ana.innerHTML=" Preprocessor directive"
				anb.innerHTML=" Inclusion directive"
				anc.innerHTML=" File inclusion directive"
				and.innerHTML=" None of the mentioned"
		correct=0; 	
		break;
		case 13:
			qus.innerHTML="Q "+(q+1)+". The C-preprocessors are specified with _________ symbol."
				ana.innerHTML=" #"
				anb.innerHTML=" $"
				anc.innerHTML=" ” ”"
				and.innerHTML=" &"
		correct=0; 	
		break;

	}
}