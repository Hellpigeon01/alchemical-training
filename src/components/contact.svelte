<script>
	let name = '';
	let email = '';
	let message = '';

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
		// You can add your form submission logic here (e.g., send data to a server)
	};
</script>

<form on:submit={handleSubmit}>
	<div>
		<label for="name">Name:</label>
		<input type="text" id="name" bind:value={name} required />
	</div>
	<div>
		<label for="email">Email:</label>
		<input type="email" id="email" bind:value={email} required />
	</div>
	<div>
		<label for="message">Message:</label>
		<textarea id="message" bind:value={message} required></textarea>
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	form {
		max-width: 600px;
		margin: auto;
		padding: 1em;
		border-radius: 1em;
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
		border: 1px solid #cccccc;
		padding: 0.5em;
		font-size: 1em;
		width: 100%;
		box-sizing: border-box;
		border-radius: 0.25em;
	}

	button {
		padding: 0.7em;
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
