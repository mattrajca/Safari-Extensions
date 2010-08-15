var resultType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE;

var inputArea = document.evaluate("html/body/center/form/table/tbody/tr/td",
								  document, null, resultType, null).snapshotItem(0);

var luckyButton = document.evaluate("//span/span/input",
									inputArea, null, resultType, null).snapshotItem(1);

var field = document.evaluate("//div/input",
							  inputArea, null, resultType, null).snapshotItem(0);

luckyButton.value = "Wolfram Alpha";
luckyButton.type = "button";
luckyButton.onclick = function() {
	window.location = "http://www.wolframalpha.com/input/?i=" + encodeURIComponent(field.value);
};
