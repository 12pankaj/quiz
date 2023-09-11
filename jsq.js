function quizjs(y) {
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
				qus.innerHTML="Q "+(q+1)+". To insert a JavaScript into an HTML page, which tag is used?"
					ana.innerHTML=" < script=â€™javaâ€™>"
					anb.innerHTML=" < javascript>"
					anc.innerHTML=" < script> "
					and.innerHTML=" < js> "
			correct=2; 	
			break;
			case 2:
				 qus.innerHTML="Q "+(q+1)+". Which of the below is used in Java script to insert special characters?"
					ana.innerHTML=" & "
					anb.innerHTML=" \\ "
					anc.innerHTML=" - "
					and.innerHTML=" % "
			correct=1; 	
			break;
			case 3:
				 qus.innerHTML="Q "+(q+1)+". Which is the correct way to write a JavaScript array?"
					ana.innerHTML=" var txt = new Array(1\:\"arr\",2\:\"kim\",3\:\"jim\")"
					anb.innerHTML=" var txt = new Array:1=(\" arr \")2=(\"kim\")3=(\"jim\")"
					anc.innerHTML=" var txt = new Array(\"arr \",\"kim\",\"jim\") "
					and.innerHTML=" var txt = new Array=\" arr \",\"kim\",\"jim\""
			correct=2; 	
			break;
			case 4:
				qus.innerHTML="Q "+(q+1)+". Which of the following is correct to write â€œHello Worldâ€ on the web page?"
					ana.innerHTML=" System.out.println(â€œHello Worldâ€)"
					anb.innerHTML=" print(â€œHello Worldâ€)"
					anc.innerHTML=" document.write(â€œHello Worldâ€) "
					and.innerHTML=" response.write(â€œHello Worldâ€)"
			correct=0; 	
			break;
			case 5:
				 qus.innerHTML="Q "+(q+1)+". Which of the following is the tainted property of a window object in Java Script?"
					ana.innerHTML=" Pathname"
					anb.innerHTML=" Protocol"
					anc.innerHTML=" Defaultstatus "
					and.innerHTML=" Host"
			correct=2; 	
			break;
			case 6:
				 qus.innerHTML="Q "+(q+1)+". Which attribute needs to be changed to make elements invisible?"
					ana.innerHTML=" visibilty "
					anb.innerHTML=" visible"
					anc.innerHTML=" invisibility"
					and.innerHTML=" invisible"
			correct=0; 	
			break;
			case 7:
				qus.innerHTML="Q "+(q+1)+". Which of the following is not a valid JavaScript variable name?"
					ana.innerHTML=" 2java "
					anb.innerHTML=" _java_and_ java _names"
					anc.innerHTML=" javaandjava"
					and.innerHTML=" None of the above"
			correct=0; 	
			break;
			case 8:
				qus.innerHTML="Q "+(q+1)+". Which of the ways below is incorrect of instantiating a date?"
					ana.innerHTML=" new Date(dateString)"
					anb.innerHTML=" new Date()"
					anc.innerHTML=" new Date(seconds) "
					and.innerHTML=" new Date(year, month, day, hours, minutes, seconds, milliseconds)"
			correct=2; 	
			break;
			case 9:
				qus.innerHTML="Q "+(q+1)+". What language defines the behavior of a web page?"
					ana.innerHTML=" HTML"
					anb.innerHTML=" CSS"
					anc.innerHTML=" XML"
					and.innerHTML=" Java Script"
			correct=3; 	
			break;
			case 10:
				 qus.innerHTML="Q "+(q+1)+". What is the alternate name for Java script?"
					ana.innerHTML=" LimeScript"
					anb.innerHTML=" Both a and d"
					anc.innerHTML=" ECMScript"
					and.innerHTML=" ECMAScript "
			correct=3; 	
			break;
			case 11:
				 qus.innerHTML="Q "+(q+1)+". Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?"
					ana.innerHTML=" Eval "
					anb.innerHTML=" ParseDoule"
					anc.innerHTML=" ParseObject"
					and.innerHTML=" Efloat"
			correct=0; 	
			break;
			case 12:
				qus.innerHTML="Q "+(q+1)+". Java Script entities start with ____________ and end with ______________"
					ana.innerHTML=" Semicolon, colon"
					anb.innerHTML=" Semicolon, Ampersand"
					anc.innerHTML=" Ampersand, colon"
					and.innerHTML=" Ampersand, semicolon "
			correct=3; 	
			break;
			case 13:
				qus.innerHTML="Q "+(q+1)+". How to append a value to an array of Java Script?"
					ana.innerHTML=" arr[arr.length] = value "
					anb.innerHTML=" arr[arr.length+1] = new Arrays()"
					anc.innerHTML=" arr[arr.length-1] = value"
					and.innerHTML=" arr[arr.length*1] = value"
			correct=0; 	
			break;

		}
				
	}
