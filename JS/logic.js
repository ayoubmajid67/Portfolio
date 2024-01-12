function navOver(thisLink) {
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
	let innerIconLIsts = ['<i class="ri-home-line"></i>', '<i class="ri-user-line"></i>', '<i class="ri-contacts-book-line"></i>', '<i class="ri-verified-badge-line"></i>', '<i class="ri-building-2-line"></i>'];
	if (screenWidth <= 530) {
		
		linkArray.forEach((element, index) => {
			element.innerHTML = innerIconLIsts[index];
		});
	} else {
		

		let innerTitleLists = ["home", "about", "contact", "Certificates", "projects"];
		linkArray.forEach((element, index) => {
			element.innerText = innerTitleLists[index];
		});
	}
}
