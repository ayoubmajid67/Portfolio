// get paragraph  from the dom :
let pMainContent = document.getElementById("mainContent");

//  change the content for mobile :
let mobileContent = `As a front-end developer, I'm passionate about creating visually stunning and user-friendly interfaces. With my knowledge of HTML, CSS, and JavaScript, I transform designs into responsive websites and applications. I keep up-to-date with industry trends and strive for seamless user experiences. I collaborate with designers and back-end developers to ensure cohesiveness and take pride in writing clean, maintainable code that adheres to best practices. `;

let medLargeContent = `As a front-end developer, I'm passionate about creating visually stunning and user-friendly interfaces. With my knowledge of HTML, CSS, and JavaScript, I transform designs into responsive websites and applications. I keep up-to-date with industry trends and strive for seamless user experiences. I collaborate with designers and back-end developers to ensure cohesiveness and take pride in writing clean, maintainable code that adheres to best practices. I'm always eager to learn and
improve my skills.`;

if (window.innerWidth <= 768) {
	pMainContent.innerText = mobileContent;
} else {
	pMainContent.innerText = medLargeContent;
}
