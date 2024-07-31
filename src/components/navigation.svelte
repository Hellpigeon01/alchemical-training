<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	const isMenuOpen = writable(false);
	const isModalOpen = writable(false);
	const isSubMenuOpen = writable(false);

	function toggleMenu() {
		isMenuOpen.update((value) => !value);
	}

	function closeMenu() {
		isMenuOpen.set(false);
	}

	function openModal(event) {
		event.preventDefault();
		isModalOpen.set(true);
		closeMenu();
	}

	function closeModal() {
		isModalOpen.set(false);
	}

	function toggleSubMenu(event) {
		event.preventDefault();
		isSubMenuOpen.update((value) => !value);
	}

	// Close the menu when clicking outside of it
	function handleClickOutside(event) {
		if (!event.target.closest('.nav-bar-container')) {
			closeMenu();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="nav-bar-container">
	<button class="hamburger" on:click={toggleMenu} alt="Menu" aria-label="Toggle Menu">☰ Menu</button
	>
	{#if $isMenuOpen}
		<div class="container darkGray pullRightLeft">
			<a href="#home" on:click={closeMenu} alt="Back to the Top">TOP</a>
			<a href="#about" on:click={closeMenu} alt="About Alchemical Training">ABOUT</a>
			<a href="#partners" on:click={closeMenu} alt="Our Partners">PARTNERS</a>
			<a href="./testimonials" on:click={closeMenu} alt="What Our Clients are Saying"
				>TESTIMONIALS</a
			>
			<a href="#blog" on:click={closeMenu} alt="Alchemical-Training Blog">BLOG</a>
			<a href="#contact" on:click={closeMenu} alt="Get in Touch">CONTACT US!</a>
			<a href="javascript:void(0)" on:click={openModal} alt="Get a Free Consult"
				>Free! Consultation</a
			>
			<hr />
			<a href="javascript:void(0)" on:click={toggleSubMenu} alt="Social Media Menu">Social Media</a>
			{#if $isSubMenuOpen}
				<div class="submenu">
					<a href="https://www.instagram.com/alchemicaltraining/" target="_blank">Instagram</a>
					<a href="https://x.com/acalchemical" target="_blank">X (Twitter)</a>
					<a href="https://www.linkedin.com/in/abigail-crowe-b7368b320/" target="_blank">LinkedIn</a
					>
					<a href="https://www.facebook.com/abigail.crowe.92" target="_blank">Facebook</a>
				</div>
			{/if}
		</div>
	{/if}
</div>

{#if $isModalOpen}
	<div class="modal" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<span class="close" on:click={closeModal}>&times;</span>
			<iframe src="https://calendly.com/alchemicaltraining" frameborder="0"></iframe>
		</div>
	</div>
{/if}

<style>
	@import 'https://fonts.googleapis.com/css?family=Raleway';

	.nav-bar-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 115px;
		display: flex;
		align-items: center;
		padding: 5px;
		z-index: 1000;
		/* background: rgba(63, 63, 63, 0.5); */
		border-radius: 10px;
		margin: 5px;
	}

	.hamburger {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		padding: 8px;
		background: rgba(63, 63, 63, 1);
		border-radius: 7px;
	}

	div.container {
		position: absolute;
		top: 50px;
		left: 10px;
		width: 200px;
		background: rgba(63, 63, 63, 1);
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px;
	}

	div.container a {
		color: #fff;
		text-decoration: none;
		font: 16px Raleway;
		margin: 5px 0;
		padding: 10px;
		position: relative;
		z-index: 1;
		cursor: pointer;
		width: 100%;
		text-align: left;
	}

	/* Pull right and left */
	div.pullRightLeft a:before,
	div.pullRightLeft a:after {
		position: absolute;
		width: 2px;
		height: 100%;
		top: 0px;
		content: '';
		background: #fff;
		opacity: 0.3;
		transition: all 0.3s;
	}

	div.pullRightLeft a:before {
		left: 0px;
	}

	div.pullRightLeft a:after {
		right: 0px;
	}

	div.pullRightLeft a:hover:before,
	div.pullRightLeft a:hover:after {
		width: 100%;
	}

	/* Submenu styles */
	.submenu {
		background: rgba(63, 63, 63, 0.9);
		border-radius: 5px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 10px;
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.submenu a {
		color: #fff;
		text-decoration: none;
		font: 14px Raleway;
		margin: 5px 0;
		padding: 5px;
		width: 100%;
		text-align: left;
	}

	/* Modal styles */
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
		background-color: #fefefe;
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

	.modal-content iframe {
		width: 100%;
		height: 400px;
		border: none;
	}

	hr {
		width: 100%;
		border: 1px solid white;
		opacity: 0.5;
		margin: 10px 0;
	}
</style>
