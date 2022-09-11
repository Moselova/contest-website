function showPass() {
   var x = document.getElementById("input-el");
   console.log(x)
   if (x.type === 'password') {
    x.type = 'text'
   } else {
    x.type = 'password'
   }
  
}
function showPass2() {
     var y = document.getElementById("input-el2");
		console.log(y);
		if (y.type === "password") {
			y.type = "text";
		} else {
			y.type = "password";
		}
}
function showPass3() {
	var z = document.getElementById("input-el3");
	console.log(z);
	if (z.type === "password") {
		z.type = "text";
	} else {
		z.type = "password";
	}
}
function menutoogle() {
	document.getElementById("Container").style.width = "60%";
	document.getElementById("sidenav-2").style.width = "40%";
	document.getElementById("sidenav-2").style.display = "block";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function closeNav() {
	document.getElementById("Container").style.width = "100%";
	document.getElementById("mySidenav").style.display = "none";
}
function menutoogle() {
	document.getElementById("mySidenav").style.display = "flex";
}


