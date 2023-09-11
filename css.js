function quizcs(y) {
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
			qus.innerHTML=(q+1)+"How can you created rounded corners using CSS3?"
				ana.innerHTML="border[round]: 30px;"
				anb.innerHTML="corner-effect: round;"
				anc.innerHTML="border-radius: 30px;"
				and.innerHTML="alpha-effect: round-corner;"
			correct=2; 	
		break;
		case 2:
			qus.innerHTML=(q+1)+"How do you add shadow to elements in CSS3?"

			ana.innerHTML="box-shadow: 10px 10px 5px grey;"

			anb.innerHTML="shadow-right: 10px shadow-bottom: 10px;"

			anc.innerHTML="shadow-color: grey;"

			and.innerHTML="alpha-effect[shadow]: 10px 10px 5px grey;"
			correct=0; 	
		break;
		case 3:
			qus.innerHTML=(q+1)+"How to you modify a border image using CSS3?"

			ana.innerHTML="border: url(image.png);"

			anb.innerHTML="border-variable: image url(image.png);"

			anc.innerHTML="border-image: url(border.png) 30 30 round;"

			and.innerHTML="None"
			correct=2; 	
		break;
		case 4:
			qus.innerHTML=(q+1)+"How to resize a background image using CSS3?"

			ana.innerHTML="background-size: 80px 60px;"

			anb.innerHTML="bg-dimensions: 80px 60px;"

			anc.innerHTML="background-proportion: 80px 60px;"

			and.innerHTML="alpha-effect: bg-resize 80px 60px;"
			correct=0; 	
		break;
		case 5:
			qus.innerHTML=(q+1)+"How to add text shadow using CSS3?"

			ana.innerHTML="font: shadowed 5px 5px 5px grey;"

			anb.innerHTML="font-shadow: 5px 5px 5px grey;"

			anc.innerHTML="text-shadow: 5px 5px 5px grey;"

			and.innerHTML="shadow: text 5px 5px 5px grey;"
			correct=2; 	
		break;
		case 6:
			qus.innerHTML=(q+1)+"How to force a word wrap using CSS3?"

			ana.innerHTML="word-wrap: break-word;"

			anb.innerHTML="text-wrap: break-word;"

			anc.innerHTML="text-wrap: force;"

			and.innerHTML="text-width: set;"
			correct=0; 	
		break;
		case 7:
			qus.innerHTML=(q+1)+"Which of these are valid CSS3 transformation statements."

			ana.innerHTML="matrix()"
			anb.innerHTML="modify()"
			anc.innerHTML="skip()"
			and.innerHTML="simulate()"
			correct=0; 	
		break;
		case 8:
			qus.innerHTML=(q+1)+"How to rotate objects using CSS3?"

			ana.innerHTML="object-rotation: 30deg;"

			anb.innerHTML="transform: rotate(30deg);"

			anc.innerHTML="rotate-object: 30deg;"

			and.innerHTML="transform: rotate-30deg-clockwise;"
			correct=1; 	
		break;
		case 9:
			qus.innerHTML=(q+1)+"How to re-size/scale objects using CSS3?"

			ana.innerHTML="transform: scale(2,4);"

			anb.innerHTML="scale-object: 2,4;"

			anc.innerHTML="scale: (2,4);"

			and.innerHTML="None"
			correct=0; 	
		break;
		case 10:
			qus.innerHTML=(q+1)+"How to create transition effects using CSS3?"
				ana.innerHTML="transition: width 2s;"
				anb.innerHTML="transition-duration: 2s; transition-effect: width;"
				anc.innerHTML="alpha-effect: transition (width,2s);"
				and.innerHTML="None"
			correct=0; 	
		break;
		case 11:
			qus.innerHTML=(q+1)+"Look at the code. What piece of code is missing when make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }"
				ana.innerHTML="the color"
				anb.innerHTML="the element"
				anc.innerHTML="the id name"
				and.innerHTML="the text shadow height"
			correct=2; 	
		break;
		case 12:
			qus.innerHTML=(q+1)+"What does RGBa mean?"
				ana.innerHTML="Review Get assistance Back-up your information acquire proof"
				anb.innerHTML="Red Green Blue alpha"
				anc.innerHTML="Red Gray Brown alpha"
				and.innerHTML="Red Gold Black alpha"
			correct=2; 	
		break;
		case 13:
			qus.innerHTML=(q+1)+" __________ is a property that allows developers to add rounded corners on the design elements."
				ana.innerHTML="Corner"
				anb.innerHTML="Box Shadow"
				anc.innerHTML="Round Corner"
				and.innerHTML="Border-Radius"
			correct=3; 	
		break;
		case 14:
			qus.innerHTML=(q+1)+"Box-Shadow is a property that allows developers to apply a...."
				ana.innerHTML="Border"
				anb.innerHTML="Drop Shadow"
				anc.innerHTML="Rounded Corner"
				and.innerHTML="Background"
			correct=1; 	
		break;
		case 15:
			qus.innerHTML=(q+1)+"If you put a value of 0 for a Border-Radius what will happen?."
				ana.innerHTML="The Corner will curve horizontal."
				anb.innerHTML="The Corner will be square."
				anc.innerHTML="The Corner will curve vertical."
				and.innerHTML="The world will end."
			correct=1; 	
		break;
		case 16:
			qus.innerHTML=(q+1)+"What are the first three values of text-shadow in order?"
				ana.innerHTML="vertical, blur, horizontal"
				anb.innerHTML="blur, vertical, horizontal"
				anc.innerHTML="vertical, horizontal, blur"
				and.innerHTML="horizontal, vertical, blur"
			correct=3; 	
		break;
		case 17:
			qus.innerHTML=(q+1)+"How do four values work on border-radius"
				ana.innerHTML="top, bottom, left, right"
				anb.innerHTML="up, down, front, behind"
				anc.innerHTML="top-left, top-right, bottom-right, bottom-left"
				and.innerHTML="bottom-left, bottom-right, top-right, top-left"
			correct=2; 	
		break;
		case 18:
			qus.innerHTML=(q+1)+"How to add text shadow using CSS3?"
				ana.innerHTML="font: shadowed 5px 5px 5px grey;"
				anb.innerHTML="font-shadow: 5px 5px 5px grey;"
				anc.innerHTML="text-shadow: 5px 5px 5px grey;"
				and.innerHTML="shadow: text 5px 5px 5px grey;"
			correct=2; 	
		break;

	}
				
				}

