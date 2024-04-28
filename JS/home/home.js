// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `
Welcome to my portfolio! I'm a third-year computer engineering student at EMSI, passionate about front-end development. With expertise in HTML, CSS, and JavaScript, I specialize in crafting visually stunning and intuitive user interfaces. Explore my projects to see how I bring designs to life and create seamless user experiences. Let's connect and collaborate!
`;

let medLargeContent = `
Hello and welcome to my portfolio! I'm currently a third-year computer engineering student at EMSI, with a background in Experimental Sciences. My journey at EMSI has deepened my understanding of mathematics, physics, and chemistry, igniting my passion for computer science and engineering. As a front-end developer, I specialize in crafting visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. I stay updated with industry trends to ensure seamless user experiences. Let's collaborate and create something amazing together!
`

if (window.innerWidth <= 768) {
	pMainContent.innerText = mobileContent;
} else {
	pMainContent.innerText = medLargeContent;
}
let cva = document.querySelector(".Cv a");
let selectLanguageSelect = document.querySelector(".Cv select");



selectLanguageSelect.onchange=function(){	
	cva.href= this.value=='Fr' ? "../pdf/cv/En.pdf" : "../pdf/cv/Fr.pdf"; 
}
