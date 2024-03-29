// this script controlls the contact form

const form = document.querySelector("#frudMail");
const btn = document.querySelector("#mailBtn");
const catchYa = document.querySelector("#sendFrom");

catchYa.style.display = "none";

console.log("hefre", form);

form.addEventListener("submit", e => {
	e.preventDefault();

	btn.innerText = "Sending...";
	btn.disabled = true;

	const data = {
		name: form[0].value,
		email: form[1].value,
		subject: form[2].value,
		phone: form[3].value,
		message: form[4].value
	}
	console.log("coo", data, document.querySelector("#centered"), document.querySelector("#ncentered"));
	
	if (catchYa.checked) return;

	axios.post("http://localhost:5001/mail/api", data).then((res) => {
		console.log("response:::", res);

		$('#centered').modal('show');

		btn.innerText = "Send Mail";
		btn.disabled = false;
	}).catch((err) => {
		console.error("Error:::", err);

		$('#ncentered').modal('show');

		btn.innerText = "Try Again?";
		btn.disabled = false;
	});
});