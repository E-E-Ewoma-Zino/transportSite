// this script controlls the contact form

const form = document.querySelector("#frudMail");

console.log("hefre", form);

form.addEventListener("submit", e => {
	e.preventDefault();

	const data = {
		name: form[0].value,
		email: form[1].value,
		subject: form[2].value,
		phone: form[3].value,
		message: form[4].value
	}
	console.log("coo", data, document.querySelector("#centered"), document.querySelector("#ncentered"));

	axios.post("https://onefinanceblog.com/mail/api", data).then((res) => {
		console.log("response:::", res);
		$('#centered').modal('show');
	}).catch((err) => {
		console.error("Error:::", err);
		$('#ncentered').modal('show');
	});
});