<script>
	import './normalize.css';
	import './global.css';
</script>

<div class="container"><slot /></div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
		border: 1px solid #fff;
	}
</style>
