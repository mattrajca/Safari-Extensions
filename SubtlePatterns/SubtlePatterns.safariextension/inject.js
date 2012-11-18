safari.self.addEventListener("message", function (event) {
	if (event.name === "changeBg") {
		var elements = document.querySelectorAll(event.message['selector']);
		for (var i = 0; i < elements.length; ++i ) {
			elements[i].style.backgroundRepeat = "repeat";
			elements[i].style.backgroundImage = event.message['image'];
		}
	}
}, false);
