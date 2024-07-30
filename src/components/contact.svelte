<script>
	let name = '';
    let email = '';
    let message = '';

	import { writable } from 'svelte/store';
	// Store to manage the thank you modal's open/close state
	export const isModalOpen = writable(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// form submission logic here (e.g., send data to a server)

		const myForm = event.target;
  		const formData = new FormData(myForm);

		fetch('/images/favicon.png', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => {
				console.log('Form successfully submitted');
				openModal();

				// Clear form fields
				name = '';
				email = '';
				message = '';
			})
			.catch((error) => alert(error));
	};

	// Thank you modal

	function openModal() {
		isModalOpen.set(true);
	}

	function closeModal() {
		isModalOpen.set(false);
	}
</script>

<form on:submit={handleSubmit} name="contact-form" data-netlify="true" netlify-honeypot="bot-field">
	<input type="hidden" name="form-name" value="contact-form" />
	<!-- Hidden Honeypot Field -->
	<input type="hidden" name="bot-field" />
	<!-- Actual Form -->
	<div>
		<label for="name">Name:</label>
		<input type="text" name="name" id="name" required bind:value={name}/>
	</div>
	<div>
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" required bind:value={email}/>
	</div>
	<div>
		<label for="message">Message:</label>
		<textarea name="message" id="message" required bind:value={message}></textarea>
	</div>
	<button type="submit" value="Submit">Submit</button>
</form>

<!-- Modal content -->
{#if $isModalOpen}
	<div class="modal">
		<div class="modal-content">
			<span class="close" on:click={closeModal} on:keypress={closeModal} tabindex="0" role="button">&times;</span>
			<h2>Thank You!</h2>
			Your message has been sent.
		</div>
	</div>
{/if}

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

	.modal {
		display: flex;
		position: fixed;
		z-index: 1001;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
		align-items: center;
		justify-content: center;
	}

	.modal-content {
		background-color: #000000;
		padding: 20px;
		border: 1px solid #888;
		width: 90%;
		max-width: 600px;
		position: relative;
	}

	.close {
		color: #aaa;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
</style>
