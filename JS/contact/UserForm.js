function sendEmail() {
	const UserName = document.querySelector(".UserName").value;
	const UserEmail = document.querySelector(".UserEmail").value;
	const UserSubject = document.querySelector(".Subject").value;
	const UserMessage = document.querySelector(".UserMessage").value;
	console.log("hi bb", UserName, UserEmail, UserSubject, UserMessage);

	Email.send({
		SecureToken: "bbb4c8e6-a068-47e4-8a9d-002a98ac5992",
		To: "ayoubmajid71@gmail.com",
		From: "ayoubmajid71@gmail.com",
		Subject: `✨the User subject is :  ${UserSubject} <br>`,
		Body: `   ✨ Message from  : ${UserName} <br><br>
                  ✨  his Email     : ${UserEmail} <br><br>
                  ✨Message       :   ${UserMessage}
`,
	}).then((message) => alert("your Message Send  with successfully 😁 "));
}
