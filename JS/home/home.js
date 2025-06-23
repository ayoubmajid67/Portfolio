// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `
Hi! I’m Ayoub Majjid, a 4th-year computer engineering student at EMSI and currently a Tech Lead & Entrepreneur at Intellcap. I’m passionate about software development, system design, and project management. I love building scalable solutions and leading tech teams. Let’s build something great together!
`;

let medLargeContent = `
Hello and welcome to my portfolio! I’m Ayoub Majjid, a fourth-year computer engineering student at EMSI, with a background in Experimental Sciences. My journey at EMSI has strengthened my foundation in mathematics, physics, and chemistry, and deepened my passion for technology and system design.
Currently, I’m working as a Tech Lead and Entrepreneur at Intellcap, where I lead the development of innovative digital solutions. My interests span project management, software development, and system architecture. I enjoy building robust, scalable systems and guiding teams from idea to execution.

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
