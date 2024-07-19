<script>
</script>

<main>
	<h2>About Alchemical Training</h2>
	<div class="about">
		<div class="alchemical">
			<p>
				Alchemical Training is founded on core principles: integrity, trust, consistency, and
				transparency. Just as the human body operates on principles of joint mechanics, muscle
				function, and stability hubs, we tailor our approach to each individual. We consider your
				goals, health history, training background, and stressors to create a personalized plan.
				Alchemical Training is committed to delivering lasting results, eschewing flashy or quick
				fixes. We offer an educated, long-term approach to quality movement, improved lifestyle, and
				unlocking your athletic potential, no matter your age.
			</p>
		</div>
		<div class="abigail">
			<div class="content">
				<h2>Abigail Crowe</h2>
				<p>
					I've spent thousands of hours training clients and exponentially more preparing to train
					them. Every moment spent acquiring certifications, graduating college, studying, lifting,
					and personal training has been driven by a pursuit of excellence and service to others. My
					purpose in this life has nothing to do with me. I love my job because I witness people
					grow into themselves, becoming autonomous, more confident, pain-free, and physically and
					mentally stronger.
				</p>
				<p>
					I observe an alchemical process unfold, even though the time and effort invested by both
					me and my clients is calculated and methodical.
				</p>
				<p>
					Strength training is a significant commitment. It can seem overwhelming or even dangerous.
					But strength comes in many forms, and with my clients, my goal is to help them reach their
					goals through any modality required, whether that be strength, stability, power,
					endurance, or more. A healthy, prepared human is a confident human, and a confident human
					is one that goes out into the world ready to win. I hope to be a part of your wins.
				</p>
			</div>
			<div class="list">
				<ul>
					<li>Founder of Alchemical Training</li>
					<li>B.S. Exercise Physiology</li>
					<li>NASM CPT</li>
					<li>PPSC certified</li>
					<li>Prescript L1/L2/L3/Skill Acquisition certified</li>
					<li>5 Years Coaching Experience</li>
				</ul>
			</div>
		</div>
	</div>
</main>

<style>
	@keyframes shine {
		0% {
			background-position: -200%;
		}
		100% {
			background-position: 200%;
		}
	}
	h2 {
		font-size: 2rem;
		font-weight: 800;
		background: linear-gradient(120deg, #ffffff, #3d3d3d, #f0f0f0);
		background-size: 200% auto;
		color: #000;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 10s linear infinite;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: center;
	}

	.about {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		font-size: 1rem;
	}

	.alchemical {
		width: 100%;
		margin-bottom: 20px;
	}

	.abigail {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0 auto;
		font-size: 1rem;
		gap: 20px;
	}

	.abigail .content,
	.abigail .list {
		flex: 1;
		background-color: rgba(51, 51, 51, 0.808);
		border-radius: 15px;
		border: 3px solid #6b6b6b;
		padding: 20px;
	}

	.abigail .content {
		width: 70%;
	}

	.abigail .list {
		width: 30%;
		display: flex;
		align-items: center; /* Center the bullet list vertically */
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		.abigail {
			flex-direction: column;
		}

		.abigail .content,
		.abigail .list {
			width: 100%;
		}
	}
</style>
