<script>
	let primaryColor = '#3a1769';
</script>

<main>
	<div class="banner-message">
		<div class="marquee">
			<h3>
				Wellness &bull; Private Gym &bull; One-on-One Training &bull; On-line Training &bull;
				Workout Plan &bull; Fitness Goals &bull; Strength Training &bull; Cardio &bull; Muscle
				Building &bull; Home Workouts &bull; Nutrition &bull; Personal Training &bull; Fitness
				&bull; Fitness Tips &bull; Athletic Training &bull; Free Motion Assessment &bull; Endurance
				&bull; Flexibility &bull; Healthy Choices &bull; Improved Lifestyle &bull; Core Stability
				&bull; Training &bull; Self-Improvement &bull; Warm-Ups &bull; Form &bull; Fitness Coaching
				&bull; Weightloss &bull; Private Gym &bull; One-on-One Training &bull; On-line &bull;
				Functional Fitness &bull; Training &bull; Workout Plan &bull; Fitness Goals &bull; Strength
				Training &bull; Cardio &bull; Muscle Building &bull; Home Workouts &bull; Nutrition &bull;
				Personal Training &bull; Fitness &bull; Fitness Tips &bull; Athletic Training &bull; Free
				Motion &bull; Exercise &bull; Assessment &bull; Endurance &bull; Flexibility &bull; Healthy
				Choices &bull; Improved Lifestyle &bull; Core Stability &bull; Training &bull;
				Self-Improvement &bull; Warm-Ups &bull; Form &bull; Fitness Coaching &bull; Bodybuilding
				&bull; Weightloss &bull; Free Movement Assessment
			</h3>
		</div>
		<div class="marquee reverse">
			<h3>
				Wellness &bull; Private Gym &bull; One-on-One Training &bull; On-line Training &bull;
				Workout Plan &bull; Fitness Goals &bull; Strength Training &bull; Cardio &bull; Muscle
				Building &bull; Home Workouts &bull; Nutrition &bull; Personal Training &bull; Fitness
				&bull; Fitness Tips &bull; Athletic Training &bull; Free Motion Assessment &bull; Endurance
				&bull; Flexibility &bull; Healthy Choices &bull; Improved Lifestyle &bull; Core Stability
				&bull; Training &bull; Self-Improvement &bull; Warm-Ups &bull; Form &bull; Fitness Coaching
				&bull; Weightloss &bull; Private Gym &bull; One-on-One Training &bull; On-line &bull;
				Functional Fitness &bull; Training &bull; Workout Plan &bull; Fitness Goals &bull; Strength
				Training &bull; Cardio &bull; Muscle Building &bull; Home Workouts &bull; Nutrition &bull;
				Personal Training &bull; Fitness &bull; Fitness Tips &bull; Athletic Training &bull; Free
				Motion &bull; Exercise &bull; Assessment &bull; Endurance &bull; Flexibility &bull; Healthy
				Choices &bull; Improved Lifestyle &bull; Core Stability &bull; Training &bull;
				Self-Improvement &bull; Warm-Ups &bull; Form &bull; Fitness Coaching &bull; Bodybuilding
				&bull; Weightloss &bull; Free Movement Assessment
			</h3>
		</div>
	</div>
</main>

<style>
	:root {
		--primary-color: #{primaryColor};
	}
	.banner-message {
		height: 80px;
		padding-left: 0;
		padding-right: 0;
		background: var(--primary-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		position: relative;
	}
	.marquee {
		width: 100%;
		line-height: 30px;
		white-space: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		word-spacing: 10px;
	}
	.marquee h3 {
		display: inline-block;
		color: #cdcdcd;
		margin-top: 5px;
		margin-bottom: 0;
		animation: marquee 60s linear infinite;
		text-transform: uppercase;
	}
	.reverse {
		top: 50px;
	}
	.reverse h3 {
		animation: marqueeReverse 60s linear infinite;
		color: #8a8a8a;
	}
	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-50%, 0);
		}
	}
	@keyframes marqueeReverse {
		0% {
			transform: translate(-50%, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
