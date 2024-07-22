<script>
</script>

<main>
	<h2>About Alchemical Training</h2>
	<div class="about">
		<div class="alchemical">
			<p>
				Alchemical Training is built on the principles of integrity, trust, consistency, and
				transparency. Just as the human body relies on joint mechanics, muscle function, and
				stability hubs, we customize our approach to each individual. We take into account your
				goals, health history, training background, and stressors to create a personalized plan.
				Committed to delivering lasting results without relying on quick fixes, Alchemical Training
				offers a knowledgeable, long-term approach to quality movement, an improved lifestyle, and
				unlocking your athletic potential at any age.
			</p>
		</div>
		<div class="abigail">
			<div class="content">
				<h2>Abigail Crowe</h2>
				<p>
					I have dedicated thousands of hours to training clients, and countless more preparing
					personalized sessions. Every moment spent acquiring certifications, graduating college,
					studying, lifting, and personal training has been driven by a pursuit of excellence and a
					desire to serve others. My purpose in life is centered around my clients, not myself. I
					love my job because I see people transform, becoming autonomous, more confident,
					pain-free, and stronger both physically and mentally.
				</p>
				<p>
					I witness an alchemical process unfold, despite the calculated and methodical efforts put
					in by both my clients and me.
				</p>
				<p>
					Strength training is a significant commitment and can often seem overwhelming or even
					dangerous. However, strength comes in many forms. My goal is to help clients achieve their
					objectives through any necessary modality—whether it's strength, stability, power,
					endurance, or more. A healthy, prepared human is a confident human, and a confident human
					is ready to conquer the world. I hope to be a part of your journey to success.
				</p>
			</div>
			<div class="list backup-img">
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

	.about {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 20px;
		font-size: 1.25rem;
	}

	.alchemical {
		width: 80%;
		margin: 0 auto;
		margin-bottom: 20px;
		padding: 20px;
	}

	.abigail {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		font-size: 1.25rem;
		padding: 20px;
	}

	.abigail .content,
	.abigail .list {
		flex: 1;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 20px;
	}

	.abigail .list {
		display: flex;
		align-items: flex-end;
		justify-content: left;
		font-size: 1.25rem;
	}

	.abigail .list ul {
		width: 100%;
		list-style-type: none;
		padding: 0;
		margin: 0;
		text-align: center;
		color: #fff;
		font-weight: bold;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.backup-img {
		flex: 1;
		background-image: url('/images/abigail.webp');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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
