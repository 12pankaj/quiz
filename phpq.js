function quizph(y) {
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
				qus.innerHTML=(q+1)+"Which of the following is used to declare a constant"
					ana.innerHTML=" const "
					anb.innerHTML=" constant "
					anc.innerHTML=" define "
					and.innerHTML=" #pragma "
			correct=2; 	
			break;
			case 2:
				  qus.innerHTML=(q+1)+"Which of the following is the way to create comments in PHP?"
					ana.innerHTML=" // commented code to end of line"
					anb.innerHTML=" /* commented code here */"
					anc.innerHTML=" # commented code to end of line"
					and.innerHTML=" all of the above "
			correct=3; 	
			break;
			case 3:
				  qus.innerHTML=(q+1)+"What does PHP stand for?"
					ana.innerHTML=" Preprocessed Hypertext Page"
					anb.innerHTML=" Hypertext Markup Language"
					anc.innerHTML=" PHP: Hypertext Preprocessor "
					and.innerHTML=" Hypertext Transfer Protocol"
			correct=2; 	
			break;
			case 4:
				 qus.innerHTML=(q+1)+"Which of the following is NOT a valid PHP comparison operator?"
					ana.innerHTML=" !="
					anb.innerHTML=" >="
					anc.innerHTML=" <=> "
					and.innerHTML=" <>"
			correct=2; 	
			break;
			case 5:
				 qus.innerHTML=(q+1)+"Which statement about the code below is correct?"
					ana.innerHTML=" the code is perfectly fine"
					anb.innerHTML=" classes can not be empty"
					anc.innerHTML=" class C can not extend both A and B "
					and.innerHTML=" qualifiers 'public' or 'private' are missing in class definitions"
			correct=2; 	
			break;
			case 6:
				qus.innerHTML=(q+1)+"What is the strpos() function used for?"
					ana.innerHTML=" Find the last character of a string"
					anb.innerHTML=" Both b and c"
					anc.innerHTML=" Search for character within a string "
					and.innerHTML=" Locate position of a stringâ€™s first character	"
			correct=2; 	
			break;
			case 7:
				qus.innerHTML=(q+1)+"Which of the following differences are valid between PHP 4 and PHP 5?"
					ana.innerHTML=" Built-in native support for SQLite"
					anb.innerHTML=" Both a and c "
					anc.innerHTML=" improved MySQL support"
					and.innerHTML=" Support for inheritance	"
			correct=1; 	
			break;
			case 8:
				qus.innerHTML=(q+1)+"____________ function in PHP Returns a list of response headers sent (or ready to send)"
					ana.innerHTML=" header()"
					anb.innerHTML=" headers_list() "
					anc.innerHTML=" header_sent()"
					and.innerHTML=" header_send()"
			correct=1; 	
			break;
			case 9:
			 	qus.innerHTML=(q+1)+"What is array_keys() used for?"
					ana.innerHTML=" Compares array keys, and returns the matches"
					anb.innerHTML=" Checks if the specified key exists in the array"
					anc.innerHTML=" Returns all the keys of an array "
					and.innerHTML=" Both b and c above	"
			correct=2; 	
			break;
			case 10:
				qus.innerHTML=(q+1)+"How do I create PHP arrays in a HTML <form>?"
					ana.innerHTML=" < input name= MyArray[]/>"
					anb.innerHTML=" < input =\"MyArray[]\" />"
					anc.innerHTML=" < input name=\"MyArray[]\" /> "
					and.innerHTML=" < input MyArray[] />	"
			correct=2; 	
			break;
			case 11:
				qus.innerHTML=(q+1)+"What is the difference between echo and print?"
					ana.innerHTML=" They both behave the same."
					anb.innerHTML=" Print can take multiple parameters where as echo cannot"
					anc.innerHTML=" Echo can take multiple parameters where as print cannot "
					and.innerHTML=" Print is a function where as echo is not.	"
			correct=2; 	
			break;
			case 12:
				qus.innerHTML=(q+1)+"Which function is used to Strip whitespace (or other characters) from the beginning and end of a string?"
					ana.innerHTML=" trim_str"
					anb.innerHTML=" strip_str"
					anc.innerHTML=" strip"
					and.innerHTML=" trim 	"
			correct=3; 	
			break;
			case 13:
				qus.innerHTML=(q+1)+"What is PHP heredoc used for?"
					ana.innerHTML=" allows creating single line of string without using quotations"
					anb.innerHTML=" allows creating multiple lines of string without using quotations "
					anc.innerHTML=" allows creating multiple lines of string with quotations"
					and.innerHTML=" allows creating single lines of string with using quotations	"
			correct=1; 	
			break;

		}
	}