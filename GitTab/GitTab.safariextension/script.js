function gotMessage (anEvent) {
	if (anEvent.name == "gotTabSizeValue") {
		var highlights = document.getElementsByClassName('highlight');
		var tabSize = anEvent.message;
		var replacementString = '';
		
		for (var n = 0; n < tabSize; n++) {
			replacementString += ' ';
		}
		
		for (var n = 0; n < highlights.length; n++) {
			var highlight = highlights.item(n);
			highlight.innerHTML = highlight.innerHTML.replace(/\t/g, replacementString);
		}
	}
}

safari.self.addEventListener("message", gotMessage, false);
safari.self.tab.dispatchMessage("getTabSizeValue");
