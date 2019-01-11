chrome.extension.sendMessage({}, function(response) {
	let readyStateCheckInterval = setInterval(function() {
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

function saveAsNg(e){
	let name = e.target.getAttribute("name")
        console.log(name)
} 

function setNgButton(){

	let tds = document.querySelectorAll(".mp_tbl1 tr>td:nth-child(4)")

	tds.forEach((td) => {
		let name = td.textContent
		let button = document.createElement("input");
		button.setAttribute("value", "NG");
		button.setAttribute("type", "button");
		button.setAttribute("class", "ng");
		button.setAttribute("name", name);
		
		button.addEventListener('click', function(e) {
			 saveAsNg(e)
		}, false);
		

		td.appendChild(button);
	});
}
