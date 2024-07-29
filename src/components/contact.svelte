<script>
	let name = '';
	let email = '';
	let message = '';

	const handleSubmit = (event) => {
		event.preventDefault();
		// Form submission logic here if needed, but it's not required for Netlify
	};
</script>

<form on:submit={handleSubmit} data-netlify="true">
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
