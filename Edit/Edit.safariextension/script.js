function gotMessage (event) {
	if (event.name === "toggleEdit") {
		if (document.body.contentEditable == 'false') {
			document.body.contentEditable = true;
		}
		else {
			document.body.contentEditable = false;
		}
	}
}

safari.self.addEventListener("message", gotMessage, false);
