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