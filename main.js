// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the H1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the H1 should be "J".

document.addEventListener("keypress", function(e){

	document.getElementById("myH1").innerHTML = e.key ;
})


// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" 
// should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
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
// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
// When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
var dontHover = document.getElementById("dontHover");
dontHover.addEventListener("mouseover",function(){
	dontHover.innerText = "Hey, I told you not to hover over me!";
})

dontHover.addEventListener("mouseout",function(){
	dontHover.innerText = "Don't hover over me";
})

// Create an HTML page with a form.
document.getElementById("submit").onclick = function() {



	var pswd = Number(document.getElementById("password").value);
	var email = document.getElementById("email").value;
	var usr = document.getElementById("user").value;
	

	function isAlphanumeric(str) {
		var arr = '1234567879'.split('');
		for (var i = 0; i < str.length; i++) {
			var ltr = str[i];
			
			if(arr.indexOf(ltr) > -1){
				return true;
			}
		}

		
	}



	

	if (pswd === 12345678 && email.length > 1 && isAlphanumeric(usr)) {
		
		document.getElementById("myH1-2").innerText = "You are in!!";
		
	}else {
		alert("You're wrong!!");
	}


};	