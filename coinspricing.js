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
/*-----------gsap------------*/
gsap.to(".page-title", { duration: 1, x: 50 });
gsap.to(".user-ctn", { duration: 1, x: 10 });