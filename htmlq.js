function quizh(y) {
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
			qus.innerHTML="Q "+(q+1)+". What does the abbreviation HTML stand for?";
				ana.innerHTML=" HyperText Markup Language"
				anb.innerHTML=" HighText Markup Language"
				anc.innerHTML=" HyperText Markdown Language"
				and.innerHTML=" None of the above"
			correct=0; 	
		break;
		case 2:
			qus.innerHTML="Q "+(q+1)+". How many Heading tag in HTML by default?";
				ana.innerHTML=" 4"
				anb.innerHTML=" 6"
				anc.innerHTML=" 2"
				and.innerHTML=" 8"
		    correct=1;  
		break;
		case 3:
			qus.innerHTML="Q "+(q+1)+". What is the smallest heading tag in HTML by default?";
				ana.innerHTML=" h4"
				anb.innerHTML=" h6"
				anc.innerHTML=" h2"
				and.innerHTML=" h8"
			correct=1;  
		break;
		case 4:
			qus.innerHTML="Q "+(q+1)+". What are the types of lists available in HTML?";
				ana.innerHTML=" Ordered,Unordered List"
				anb.innerHTML=" Bulleted,Numbered List"
				anc.innerHTML=" Named,unnamed List"
				and.innerHTML=" None of the above"
			correct=0;  
		break;
		case 5:   
			qus.innerHTML="Q "+(q+1)+". Which of the following tags doesn't require a closing tag?";
				ana.innerText=" <br>"
				anb.innerText=" <hr/>"
				anc.innerText=" Both A and B"
				and.innerText=" None of the above"
			correct=2;  
		break;
		case 6:
			qus.innerHTML="Q "+(q+1)+". Which attribute is used to provide a unique name to an HTML element?";
				ana.innerHTML=" id"
				anb.innerHTML=" class"
				anc.innerHTML=" type"
				and.innerHTML=" None of the above"
			correct=0;  
		break;
		case 7:
			qus.innerHTML="Q "+(q+1)+". What tag is used to tender an image on a webpage?";
				ana.innerHTML=" image"
				anb.innerHTML=" src"
				anc.innerHTML=" img"
				and.innerHTML=" None of the above"
			correct=2;  
		break;
		case 8:
			qus.innerHTML="Q "+(q+1)+". What is the correct syntax to write an HTML comment?";
				ana.innerText=" <!-- Comment -->"
				anb.innerHTML=" //Comment"
				anc.innerHTML=" #Comment"
				and.innerHTML=" /*Comment*/"
			correct=0;  
		break;
		case 9:
		 	qus.innerHTML="Q "+(q+1)+". What are the types of unordered lists in HTML?";
				ana.innerHTML=" Cricle,square,disc"
				anb.innerHTML=" Triangle,Square,dis"
				anc.innerHTML=" Triangle,Cricle,disc"
				and.innerHTML=" All of the above"
	         correct=0;  
		break;
		case 10:
			qus.innerHTML="Q "+(q+1)+". Which of the following things are necessary to create an HTML page?";
				ana.innerHTML=" A text editor"
				anb.innerHTML=" Web Browser"
				anc.innerHTML=" Both A and B"
				and.innerHTML=" None of the above"
			correct=2;  
		break;
		case 11:
			qus.innerHTML="Q "+(q+1)+". Choose the correct HTML element to define important text?";
				ana.innerText=" <b>"
				anb.innerText=" <i>"
				anc.innerText=" <strong>"
				and.innerText=" <important>"
			correct=2;  
		break;
		case 12:
			qus.innerHTML="Q "+(q+1)+". Which character is used to indicate an end tag?";
				ana.innerHTML=" <"
				anb.innerHTML=" /"
				anc.innerHTML=" ^"
				and.innerHTML=" *"
			correct=1;  
			break;
	}
				
}
