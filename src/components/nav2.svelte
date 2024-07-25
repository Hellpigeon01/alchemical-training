<script>
	import Modal from '../components/modal.svelte';

	let menuItems = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/#about' },
		{ name: 'Partners', link: '/#partners' },
		{ name: 'Blog', link: '/#blog' },
		{ name: 'Contact Us', link: '/#contactus' }
	];

	function handleClick(event) {
		// Remove the active class from all menu items
		document.querySelectorAll('.menu-item').forEach((item) => {
			item.classList.remove('active');
		});

		// Add the active class to the clicked menu item
		event.currentTarget.classList.add('active');
	}
</script>

<nav class="nav-container">
	{#each menuItems as item}
		<a href={item.link} class="menu-item" on:click={handleClick}>
			{item.name}
		</a>
	{/each}
</nav>
<Modal />

<style>
	.nav-container {
		display: flex;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
		flex-wrap: wrap;
		gap: 0.5rem; /* Adds space between buttons */
	}

	.menu-item {
		background-color: #7b0293;
		color: white;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		text-decoration: none;
		transition:
			background-color 0.3s,
			transform 0.3s;
		border-radius: 10px;
	}

	.menu-item:hover {
		background-color: #4b0163;
	}

	.menu-item:active,
	.menu-item.active {
		background-color: #a340b3;
	}

	@media (max-width: 768px) {
		.menu-item {
			padding: 0.5rem 1rem; /* Adjust padding for smaller screens */
			font-size: 0.9rem; /* Adjust font size for smaller screens */
		}
	}

	@media (max-width: 480px) {
		.menu-item {
			padding: 0.5rem 0.75rem; /* Further adjust padding for very small screens */
			font-size: 0.8rem; /* Further adjust font size for very small screens */
		}
	}
</style>
