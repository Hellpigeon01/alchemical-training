<script>
	import { writable } from 'svelte/store';

	// Store to manage the modal's open/close state
	export const isModalOpen = writable(false);

	function openModal(event) {
		event.preventDefault();
		isModalOpen.set(true);
	}

	function closeModal() {
		isModalOpen.set(false);
	}
</script>

<!-- Button to open the modal -->
<button on:click={openModal} class="consultation-button">Free Consultation</button>

<!-- Modal content -->
{#if $isModalOpen}
	<div class="modal" on:click={closeModal}>
		<div class="modal-content" on:click|stopPropagation>
			<span class="close" on:click={closeModal}>&times;</span>
			<iframe src="https://calendly.com/alchemicaltraining" frameborder="0"></iframe>
		</div>
	</div>
{/if}

<style>
	.consultation-button {
		display: inline-block;
		padding: 10px 20px;
		font-size: 16px;
		color: #fff;
		background-color: #00356e;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		border-radius: 5px;
		margin-top: 20px;
	}

	.consultation-button:hover {
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
</style>
