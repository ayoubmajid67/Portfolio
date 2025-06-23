searchInput.addEventListener("input", () => {
	filterContainers("projectName");
});

let arrProjectLink = document.querySelectorAll(".ProjectResource");

// arrProjectLink.forEach((resource) => {
// 	resource.addEventListener("click", (event) => {
// 		if (event.target.classList.contains("ProjectResource")) resource.querySelector("a").click();
// 	});
// });
