chrome.extension.sendMessage({}, function(response) {
	let readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		setNgButton()
	}
	}, 10);
});

function setNgButton(){

	let tds = document.querySelectorAll(".TeacherTable>tbody>tr>td")

	tds.forEach((td) => {
		let name = td.querySelector(".name").textContent.replace(/\(.*/, '');
		if (localStorage.getItem("ng-" + name)){
			td.classList.add("ng")
		}	
	});
}
