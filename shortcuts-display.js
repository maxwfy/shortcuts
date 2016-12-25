//OBJECT WITH BASIC SHORTCUTS LIST
var keyShortcuts = {

	a : "Select all text",
	c : "Copy text",
	f : "Find text",
	h : "Find and replace text",
	n : "New Document",
	o : "Open a file",
	p : "Print options",
	s : "Save file",
	v : "Paste text",
	x : "Cut text",
	y : "Redo text",
	z : "Undo text"

};

//SHORTCUT INFO SCRIPT
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) { //checking if ctrl or cmd key is down
        if(event.which >= 65 && event.which <= 90){ //filtering to A-Z letters
        var keyPressed = String.fromCharCode(event.which).toLowerCase(); //storing key value into a variable
        if(keyShortcuts[keyPressed]){ //checking if the variable match to keyShortcuts object keys
            alert(keyShortcuts[keyPressed]); //display success message
        } else {
            alert("Shortcut isn't available");} //display not available message
        }
    }
});
