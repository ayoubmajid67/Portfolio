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
	let innerIconLIsts = ['<i class="fa-solid fa-house-chimney"></i>',
		 '<i class="fa-solid fa-circle-user"></i>', 
		 '<i class="fa-solid fa-toolbox"></i>',
		 '<i class="fa-solid fa-address-book"></i>',
		  
		  '<i class="fa-solid fa-user-graduate"></i>',
		  '<i class="fa-solid fa-laptop-code"></i>'];
	if (screenWidth <= 768) {
		linkArray.forEach((element, index) => {
			element.innerHTML = innerIconLIsts[index];
		});
	} else {
		let innerTitleLists = ["home", "about","Services", "contact", "Certificates", "projects"];
		linkArray.forEach((element, index) => {
			element.innerText = innerTitleLists[index];
		});
	}
}

let boxesContainer = document.querySelectorAll(".domainContainer");
let searchInput = document.querySelector(".searchContainer input");

function filterCards(domain, attName) {
	domain.querySelectorAll(".domainContent .card").forEach((card) => {
		if (card.getAttribute(attName) && !card.getAttribute(attName).toLowerCase().trim().includes(searchInput.value.toLowerCase().trim())) {
			card.style.display = "none";
		} else {
			card.style.display = "flex";
		}
	});
}

function checkHiddenDomain(domain) {
	let isHidden = true;
	domain.querySelectorAll(".domainContent .card").forEach((card) => {
		if (card.style.display == "flex") {
			isHidden = false;
			return;
		}
	});

	return isHidden;
}

function filterDomain(domain) {
	if (checkHiddenDomain(domain)) domain.style.display = "none";
	else domain.style.display = "block";
}

function filterContainers(attName) {
	boxesContainer.forEach((domain) => {
		filterCards(domain, attName);

		filterDomain(domain);
	});
}
let searchContainer = document.querySelector(".searchContainer .content");

const btnScrollDown = document.getElementById("DropDown");


let endOfPage =  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
) ;


function scrollInOverflowToPosition(containerSelector, position) {
    const container = document.querySelector(containerSelector);

    if (container) {
        console.log('Scrolling inside:', container, 'to position:', position);
        container.scrollTo({
            top: position,
            behavior: "smooth",
        });
    } else {
        console.error('Container not found:', containerSelector);
    }
}

function scrollToPosition(Position) {
	console.log('scroll',Position)
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
const currentPageName = window.location.pathname.split("/").pop();
function handlScrollBtn() {





	flagBtn = !flagBtn;
	if (flagBtn) {



		if(currentPageName=="about.html"){
			scrollInOverflowToPosition("body",endOfPage)
		}
		else{
			scrollToPosition(endOfPage);
		}


		btnScrollDown.classList.remove("dropTop");
		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropTop.webp");
		}, 140);
	} else {
		if(currentPageName=="about.html"){
			scrollInOverflowToPosition("body",0)
		}
		else{
			scrollToPosition(0);
		}

		setTimeout(() => {
			btnScrollDown.setAttribute("src", "../button/dropDown.webp");
		}, 140);

		btnScrollDown.classList.add("dropTop");
	}
}

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
