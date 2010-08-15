function getID() {
	var loc = window.location.toString();
	
	var start = loc.indexOf("s_") + 2;
	var end = loc.length;
	
	for (var n = start; n < loc.length; n++) {
		if (loc.charAt(n) == '/') {
			end = n;
			break;
		}
	}
	
	return loc.substring(start, end);
}

var ul = document.evaluate("//div[@id='sd_station_radiotime']/ul", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);

var li = document.createElement("li");

var button = document.createElement("button");
button.className = "listingSprite";
button.style.backgroundImage = "url('" + safari.extension.baseURI + "play.png')";
button.style.width = "18px";
button.style.marginRight = "10px";

var url = "http://opml.radiotime.com/Tune.ashx?id=s" + getID();
url = "radio://localhost/play?stream=" + encodeURIComponent(url);

var a = document.createElement("a");
a.href = url;
a.innerHTML = "Listen in Snowtape";

li.appendChild(button);
li.appendChild(a);

ul.appendChild(li);
