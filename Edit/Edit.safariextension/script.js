function gotMessage (event) {
	if (event.name === "toggleEdit") {
		if (document.body.contentEditable == 'true') {
			document.body.contentEditable = false;
		}
		else {
			document.body.contentEditable = true;
		}
	}
}

safari.self.addEventListener("message", gotMessage, false);
