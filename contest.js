function openForm() {
    var popup = document.getElementById("popup-el").style.display = 'flex'
    console.log(popup)

}
function closepopup() {
    var popup = document.getElementById('popup-el').style.display = 'none'
}

function noclose() {
    if (document.getElementById("nopop") ) {
       event.stopPropagation(); 
    }
		// var nopop = document.getElementById('nopop')
		//event.stopPropagation();
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
