searchInput.addEventListener("input", () => {
	filterContainers("projectName");
});

let arrProjectLink = document.querySelectorAll(".ProjectResource");

arrProjectLink.forEach((resource) => {
	resource.addEventListener("click", () => {
		resource.querySelector("a").click();
	});
});
