// Add an event listener to detect changes in screen width
window.addEventListener("resize", handleScreenWidthChange);

handleScreenWidthChange();

searchContainer.onclick = function () {
	searchInput.focus();
};

btnScrollDown.onclick = handlScrollBtn;

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
