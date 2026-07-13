// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `I'm Ayoub Majjid, a State Engineer in MIAGE and EMSI graduate. I specialize in software architecture, microservices, DevOps, and digital transformation.
Currently, I am a Digital Transformation Lead & Tech Lead at Capgemini, and was previously an Entrepreneur at Intellcap.`;

let medLargeContent = `I'm Ayoub Majjid, a State Engineer in MIAGE, EMSI graduate, and specialist in software architecture, microservices, DevOps, and digital transformation. I combine technical expertise with hands-on leadership to deliver scalable systems.

Currently, I serve as a Digital Transformation Lead and Tech Lead at Capgemini, driving process industrialization and coordinating teams for successful project delivery. Previously, I was an Entrepreneur at Intellcap, leading three innovation projects with the goal of scaling them into startups.

Let's connect and build something impactful together!`;

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
