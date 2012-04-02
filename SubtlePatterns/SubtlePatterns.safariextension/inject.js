safari.self.addEventListener("message", function (event) {
	if (event.name === "changeBg") {
		document.body.style.backgroundRepeat = "repeat";
		document.body.style.backgroundImage = event.message;
	}
}, false);
