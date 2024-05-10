// Function to handle the intersection of elements with the viewport
function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Add a CSS class to trigger the animation
			setTimeout(() => {
				entry.target.classList.add("animate");
				observer.unobserve(entry.target);
			}, 50);

			// Stop observing this element to avoid repeating the animation
		} else {
			observer.observe(entry.target);
			entry.target.classList.remove("animate");
		}
	});
}
function handleIntersectionNav(navElement, cardSection) {
	// Calculate the distance from the element to the top of the page
	const CardPosition = cardSection.getBoundingClientRect().top + window.scrollY;

	if (window.scrollY >= CardPosition - CardPosition * 0.1) navBar.style.visibility = "hidden";
	else navBar.style.visibility = "visible";
}

const navBar = document.getElementById("navbar");
const CardSection = document.getElementById("mySkills");

window.onscroll = function () {
	handleIntersectionNav(navBar, CardSection);
	// Create an Intersection Observer
	const observer = new IntersectionObserver(handleIntersection, {
		threshold: 0.4, // Trigger animation when at least 50% of the element is visible
	});

	// Observe all elements with the class "animate-on-scroll"
	const elements = document.querySelectorAll(".animate-on-scroll");
	elements.forEach((element) => {
		observer.observe(element);
	});
};

const btnScrollDown = document.getElementById("DropDown");
let endOfPage = document.body.scrollHeight;

function scrollToPosition(Position) {
	window.scrollTo({
		top: Position,
		behavior: "smooth",
	});
}

let flagBtn = false;

let switchClasses = (addedClass, removedClass, element) => {
	element.classList.add(addedClass);
	element.classList.remove(removedClass);
};

function handlScrollBtn() {
	flagBtn = !flagBtn;
	if (flagBtn) {
		scrollToPosition(endOfPage);

		btnScrollDown.classList.remove("dropTop");
		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropTop.webp");
		}, 140);
	} else {
		scrollToPosition(0);

		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropDown.webp");
		}, 140);

		btnScrollDown.classList.add("dropTop");
	}
}

btnScrollDown.onclick = handlScrollBtn;
function isAtEndOfPage() {
	var documentHeight = document.documentElement.scrollHeight;
	var viewportHeight = window.innerHeight;
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	var distanceToBottom = documentHeight - (scrollTop + viewportHeight);
	return distanceToBottom < 50;
}
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

let flagScroll = false;
window.onscroll = async function () {
	await delay(300);

	if (isAtEndOfPage()) {
		flagScroll = !flagScroll;
		if (flagScroll) {
			btnScrollDown.setAttribute("src", "../button/dropTop.webp");
			btnScrollDown.classList.remove("dropTop");
		}
	} else if (document.documentElement.scrollTop == 0) {
		flagScroll = !flagScroll;
		btnScrollDown.setAttribute("src", "../button/dropDown.webp");
		btnScrollDown.classList.add("dropTop");
	}
};

let skillsContainer = document.querySelectorAll(".domainContainer");
let searchInput = document.querySelector(".searchContainer input");

searchInput.addEventListener("input", () => {
	filterSkills(skillsContainer);
});

function filterCards(domain) {
	domain.querySelectorAll(".DomainContent .card").forEach((card) => {
		if (card.getAttribute("skillName") && !card.getAttribute("skillName").toLowerCase().trim().includes(searchInput.value.toLowerCase().trim())) {
			card.style.display = "none";
		} else {
			card.style.display = "flex";
		}
	});
}

function checkHiddenDomain(domain) {
	let isHidden = true;
	domain.querySelectorAll(".DomainContent .card").forEach((card) => {
		if (card.style.display == "flex") {
			isHidden = false;
			return;
		}
	});

	return isHidden;
}

function filterDomain(domain) {
	let domainName = domain.querySelector(".DomainName");

	if (checkHiddenDomain(domain)) domainName.style.display = "none";
	else domainName.style.display = "block";
}

function filterSkills(skillsContainer) {
	skillsContainer.forEach((domain) => {
		filterCards(domain);

		filterDomain(domain);
	});
}

let searchContainer = document.querySelector(".searchContainer .content");

searchContainer.onclick = function () {
	searchInput.focus();
};
