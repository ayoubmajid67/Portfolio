// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `
Hi! I’m Ayoub Majjid, a 5th-year computer engineering student at EMSI and currently a Tech Lead & Entrepreneur at Intellcap. I’m passionate about software development, system design, and project management. I love building scalable solutions and leading tech teams.
I will soon begin my Java & Microservices Internship at Capgemini TS, where I will gain hands-on experience in enterprise-grade software development, modern backend architectures, and industry best practices.

`;

let medLargeContent = `
Hello and welcome to my portfolio! I’m Ayoub Majjid, a fifth-year computer engineering student at EMSI, with a background in Experimental Sciences. My journey at EMSI has strengthened my foundation in mathematics, physics, and chemistry, and deepened my passion for technology and system design.

Currently, I serve as Tech Lead and Entrepreneur at Intellcap, where I am leading 3 innovation projects. with the goal of transforming them into impactful and scalable startups. I enjoy guiding teams from idea to execution.
I will soon begin my Java & Microservices Internship at Capgemini TS, where I will gain hands-on experience in enterprise-grade software development, modern backend architectures, and industry best practices.
Let’s connect and create something impactful together!
`;

if (window.innerWidth <= 768) {
	pMainContent.innerText = mobileContent;
} else {
	pMainContent.innerText = medLargeContent;
}
let cva = document.querySelector(".Cv a");
let selectLanguageSelect = document.querySelector(".Cv select");

selectLanguageSelect.onchange = function () {
	cva.href = this.value == "Fr" ? "../pdf/cv/Fr.pdf" : "../pdf/cv/En.pdf";
};

// ============================================
// INTRO VIDEO CONTROLS
// ============================================

const introVideo = document.getElementById('introVideo');
const videoOverlay = document.getElementById('videoOverlay');
const playBtn = document.getElementById('playBtn');

if (introVideo && videoOverlay && playBtn) {
	// Play video when clicking the overlay or play button
	const playVideo = () => {
		introVideo.play();
		videoOverlay.classList.add('hidden');
	};

	playBtn.addEventListener('click', playVideo);
	videoOverlay.addEventListener('click', playVideo);

	// Show overlay when video is paused
	introVideo.addEventListener('pause', () => {
		if (!introVideo.ended) {
			videoOverlay.classList.remove('hidden');
		}
	});

	// Show overlay when video ends
	introVideo.addEventListener('ended', () => {
		videoOverlay.classList.remove('hidden');
	});

	// Hide overlay when video starts playing
	introVideo.addEventListener('play', () => {
		videoOverlay.classList.add('hidden');
	});
}
