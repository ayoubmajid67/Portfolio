function navOver(thisLink) {
	console.log("nav over ");
	linkArray.forEach((element) => {
		if (element.classList.contains("currentPage")) {
			if (element != thisLink) {
				element.classList.remove("currentPage");
				element.classList.add("temp");
				return;
			}
		}
	});
}

function navOut() {
	console.log("nav out ");
	linkArray.forEach((element) => {
		if (element.classList.contains("temp")) {
			element.classList.remove("temp");
			element.classList.add("currentPage");
			return;
		}
	});
}

// Function to handle screen width changes
function handleScreenWidthChange() {
	var screenWidth = window.innerWidth;
	let innerIconLIsts = [
    '<i class="ri-home-line"></i>', 
    '<i class="ri-user-line"></i>',
    '<i class="ri-contacts-book-line"></i>',
    '<i class="ri-verified-badge-line"></i>',
    '<i class="ri-building-2-line"></i>'];
	// Check if the screen width is less than or equal to 530 pixels
	if (screenWidth <= 530) {
		// Your code for screens less than or equal to 530 pixels goes here

		linkArray.forEach((element, index) => {
			element.innerHTML = innerIconLIsts[index];
		});

	} else {
		//   // Your code for screens wider than 530 pixels goes here

		let innerTitleLists = ["home", "about", "contact", "Certificates", "projects"];
		linkArray.forEach((element, index) => {
			element.innerText = innerTitleLists[index];
		});
	}
}
