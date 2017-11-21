document.addEventListener("keypress", function(e){

	document.getElementById("myH1").innerHTML = e.key ;
})

document.getElementById("btns").addEventListener("click",function(event){
	let clickedBtn = event.target.id;
	if(clickedBtn === "btn2"){
		document.getElementById("btn1").disabled = false;
		document.getElementById("imRt").style.visibility = "hidden";
		document.getElementById("noImRt").style.visibility = "visible";
		document.getElementById("btn2").disabled = true;
	}else{
		document.getElementById("btn2").disabled = false;
		document.getElementById("imRt").style.visibility = "visible";
		document.getElementById("noImRt").style.visibility = "hidden";
		document.getElementById("btn1").disabled = true;
	}
});

var dontHover = document.getElementById("dontHover");
dontHover.addEventListener("mouseover",function(){
	dontHover.innerText = "Hey, I told you not to hover over me!";
})

dontHover.addEventListener("mouseout",function(){
	dontHover.innerText = "Don't hover over me";
})

