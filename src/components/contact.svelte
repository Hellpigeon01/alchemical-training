<script>
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
		// form submission logic here (e.g., send data to a server)

		const myForm = event.target;
  		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => console.log('Form successfully submitted'))
			.catch((error) => alert(error));
	};
</script>

<form name="contact-form" data-netlify="true">
	<input type="hidden" name="form-name" value="contact-form" />
	<div>
		<label for="name">Name:</label>
		<input type="text" name="" id="name" required />
	</div>
	<div>
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required />
	</div>
	<div>
		<label for="message">Message:</label>
		<textarea name="message" id="message" required></textarea>
	</div>
	<input type="submit" value="Submit" />
</form>

<style>
	form {
		max-width: 600px;
		margin: auto;
		padding: 1em;
	}

	div {
		margin-bottom: 1em;
	}

	label {
		margin-bottom: 0.5em;
		color: white;
		display: block;
	}

	input,
	textarea {
		background: rgb(30, 30, 41);
		padding: 0.5em;
		font-size: 1em;
		color: white;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid rgb(30, 30, 41);
		outline: none;
	}

	input:focus,
	textarea:focus {
		border-color: #007bff;
	}

	button {
		padding: 0.4em;
		color: #fff;
		background-color: #007bff;
		border: none;
		border-radius: 0.25em;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
