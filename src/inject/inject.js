chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		setNgButton()
	}
	}, 10);
});

function setNgButton(){

	tds = document.querySelectorAll(".mp_tbl1 tr>td:nth-child(4)")

	tds.forEach((td) => {
		name = td.textContent
		var button = document.createElement("input");
		button.setAttribute("value", "NG");
		button.setAttribute("type", "button");
		button.setAttribute("class", "ng");
		button.setAttribute("name", name);
		
		button.addEventListener('click', function() {
  
			console.log('heys');
		  
		}, false);
		

		td.appendChild(button);
	});
}
