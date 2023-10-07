const ProfileImgContainer = document.querySelector(".profileContainer ");
const MediaContainer = document.querySelector(".SocialMedia");

const BasicSocialContainerWidth = 60;
const BasicImgWidth = 60;
const basicScreenWidth = 1900;

window.onresize = () => {
	ControlLeftContentWidth();
};
window.onload = () => {
	ControlLeftContentWidth();
};

function ControlLeftContentWidth() {
	let CurrentWidth = window.screen.width;

	let DifferenceScreen = basicScreenWidth - CurrentWidth;
	let newMediaContainerWidth = (DifferenceScreen * 36) / 1064 + BasicSocialContainerWidth;
	let newImgContainerWidth = (DifferenceScreen * 36) / 1064 + BasicImgWidth;
	MediaContainer.style.width = `${newMediaContainerWidth}%`;
	ProfileImgContainer.style.width = `${newImgContainerWidth}%`;
}
