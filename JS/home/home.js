// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `
Welcome to my portfolio! I'm a fourth-year computer engineering student at EMSI, passionate about full-stack web development. With expertise in HTML, CSS, and JavaScript react and more. Explore my projects to see how I bring designs to life and create seamless user experiences. Let's connect and collaborate!
`;

let medLargeContent = `
Hello and welcome to my portfolio! I'm currently a fourth-year computer engineering student at EMSI, with a background in Experimental Sciences. My journey at EMSI has deepened my understanding of mathematics, physics, and chemistry, igniting my passion for computer science and engineering.  As a full-stack developer, I specialize in building dynamic and scalable applications using React, Next.js, Python, and more. I stay updated with industry trends to ensure seamless user experiences and efficient back-end solutions. Let's collaborate and create something amazing together!
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
