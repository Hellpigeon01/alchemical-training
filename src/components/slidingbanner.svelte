<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let prefersReducedMotion = false;
	const tagList = [
		'Private Gym',
		'On-Line',
		'Workout Plan',
		'Fitness Goals',
		'Strength Training',
		'Cardio',
		'Muscle Building',
		'Home Workouts',
		'Nutrition',
		'Personal Training',
		'Fitness',
		'Fitness Tips',
		'Athletic Training',
		'Weightlifting',
		'Free Motion Assessment',
		'Endurance',
		'Flexibility',
		'Healthy Choices',
		'Improved Lifestyle',
		'Core Stability',
		'Training',
		'Self-Improvement',
		'Warm-Ups',
		'Form',
		'Fitness Coaching',
		'Bodybuilding',
		'Weightloss'
	];

	const lists = writable([]);

	function cloneElements(arr) {
		return arr.map((item) => item);
	}

	function setupScrolling() {
		lists.set([[...tagList], [...tagList]].map((list) => [...list, ...cloneElements(list)]));
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
			prefersReducedMotion = mediaQuery.matches;

			if (!prefersReducedMotion) {
				setupScrolling();
			}
		}
	});
</script>

<div class="tag-scrollers">
	{#if !prefersReducedMotion}
		{#each $lists as list, index}
			<div
				class="tag-scroller scrolling"
				style="--duration: {list.length * 2}s; --direction: {index % 2 === 0
					? 'normal'
					: 'reverse'};"
			>
				<ul class="tag-list">
					{#each list as tag}
						<li>{tag}</li>
					{/each}
				</ul>
			</div>
		{/each}
	{:else}
		<div class="tag-scroller">
			<ul class="tag-list">
				{#each tagList as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	:root {
		--dark: #252a2e;
		--light: #f5f5f5;
		--background: var(--light);
		--text: var(--dark);
		--border: var(--dark);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--background: var(--dark);
			--text: var(--light);
			--border: var(--light);
		}
	}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		display: grid;
		min-block-size: 100vh;
		place-content: center;
		background: var(--background);
		color: var(--text);
	}

	.tag-scrollers {
		width: 100%;
		max-width: 1200px;
		overflow: hidden;
		margin: 0 auto;
		padding: 5px;
	}

	.tag-scroller {
		display: grid;
		gap: 1.5rem;
		mask: linear-gradient(90deg, #0000, var(--background) 15%, var(--background) 85%, #0000);
	}

	.tag-list {
		list-style: none;
		margin: 0;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	@media (prefers-reduced-motion) {
		.tag-list {
			flex-flow: row nowrap;
			overflow: auto;
			scrollbar-width: none;
			scrollbar-color: transparent transparent;
		}
		.tag-list::-webkit-scrollbar-track {
			background: transparent;
		}
		.tag-list::-webkit-scrollbar-thumb {
			background: transparent;
		}
		.tag-list::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
		}
	}

	.tag-list li {
		font-family: system-ui;
		font-size: 1.125rem;
		line-height: 1;
		padding: 0.625rem 1.375rem;
		border: 2px solid var(--border);
		border-radius: 10ch;
		white-space: nowrap;
	}

	.tag-scroller.scrolling .tag-list {
		width: max-content;
		flex-wrap: nowrap;
		animation: horizontal-scroll var(--duration) var(--direction, normal) linear infinite;
	}

	.tag-scroller.scrolling .tag-list:nth-child(even) {
		--direction: reverse;
	}

	.tag-scroller:hover .tag-list {
		animation-play-state: paused;
	}

	@keyframes horizontal-scroll {
		to {
			transform: translateX(calc(-50% - 0.75rem));
		}
	}
</style>
