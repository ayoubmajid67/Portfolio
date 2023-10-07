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

let flag = false;
btnScrollDown.onclick = function () {
	flag = !flag;
	if (flag) {
		scrollToPosition(endOfPage);
		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropTop.svg");
		}, 240);
	} else {
		scrollToPosition(0);

		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropDown.gif");
		}, 240);
	}
};
