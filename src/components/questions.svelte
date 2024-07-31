<script>
	let faqs = [
		{
			question: 'WHAT SERVICES DO YOU OFFER?',
			answer: '1-on-1 in-person and hybrid coaching. 1-on-1 online coaching.'
		},
		{
			question: 'IS NUTRITIONAL GUIDANCE OFFERED TO CLIENTS THAT SIGN UP FOR COACHING?',
			answer:
				'Yes, guidance and plans are offered as part of the one-on-one online and hybrid coaching. A huge pillar of progress is nutrition, and is thus a large area of focus and discussion throughout training.'
		},
		{
			question: 'CAN I RECEIVE TRAINING WITH MINIMAL EQUIPMENT?',
			answer: 'Always.'
		},
		{
			question: 'WHAT SPORTS DO YOU HAVE EXPERIENCE WITH COACHING?',
			answer:
				'Baseball, football, softball, gymnastics, weightlifting, cross country, soccer, basketball, Jiu Jitsu, triathletes, marathon runners, fitness racers- to name a few.'
		},
		{
			question: 'WHAT IS HYBRID TRAINING?',
			answer:
				'It is an online and in person model, with a set frequency of live coaching sessions per week/month and a full online experience so that the client never misses a beat and can also learn and test their skills on their own.'
		}
	];

	function toggle(index) {
		faqs = faqs.map((faq, i) => ({
			...faq,
			open: i === index ? !faq.open : faq.open
		}));
	}
</script>

<div class="faq-container">
	{#each faqs as { question, answer, open }, index}
		<div class="faq-card">
			<button on:click={() => toggle(index)} class:active={open}>
				{question}
			</button>
			<div class="content" class:open>
				<p>{answer}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.faq-container {
		width: 60%;
		margin: 0 auto;
	}

	.faq-card {
		margin: 10px 0;
		border-radius: 5px;
		overflow: hidden;
	}

	.faq-card button {
		width: 100%;
		background-color: #490058;
		color: white;
		border: none;
		padding: 15px;
		text-align: left;
		outline: none;
		font-size: 18px;
		cursor: pointer;
		border-radius: 5px 5px 0 0;
	}

	.faq-card button:after {
		content: '\002B';
		float: right;
	}

	.faq-card button.active:after {
		content: '\2212';
	}

	.faq-card .content {
		padding: 0 15px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease-out;
		background-color: rgb(220, 220, 220);
		color: black;
	}

	.faq-card .content p {
		margin: 10px 0;
		padding: 10px 0;
	}

	.faq-card .content.open {
		max-height: 1000px; /* Arbitrary large value for smooth transition */
	}
</style>
