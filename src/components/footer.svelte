<footer>
	<div class="footer-container">
		<div class="footer-inner">
			<div class="col-fl-2">
				<div style="text-align: center; color: white; font-size: 1.25rem; margin-bottom: 30px;">
					“People are capable, at any time in their lives,<br /> of doing what they dream of.”
					<p style="font-size: .9rem">― Paulo Coelho, The Alchemist</p>
				</div>
				<div style="text-align: center;">
					<a href="mailto:ac@alchemicaltraining.com" style="font-weight: bold;"
						>ac@alchemicaltraining.com</a
					>
				</div>
				<div style="text-align: center; margin-top: 20px;">
					<a href="https://linktr.ee/abigailcrowe"
						><span style="font-weight: bold; color: #7b0293;">** Get Started Today ** </span></a
					>
				</div>
			</div>
			<div class="col-fl-1">
				<h3 style="color: white;">QUICK LINKS</h3>
				<div>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/#about">About</a></li>
						<li><a href="/#partners">Partners</a></li>
						<li><a href="./#testimonials">Testimonials</a></li>
						<li><a href="#">Alchemical Blog</a></li>
						<li><a href="/#contact">Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div class="col-fl-1">
				<h3 style="color: white;">FOLLOW US</h3>
				<div class="social-icons">
					<a
						href="https://www.facebook.com/abigail.crowe.92"
						target="_blank"
						class="fab fa-facebook-f"
					></a>
					<a href="https://www.twitter.com" target="_blank" class="fab fa-twitter"></a>
					<a
						href="https://www.instagram.com/alchemicaltraining/"
						target="_blank"
						class="fab fa-instagram"
					></a>
					<a href="https://www.linkedin.com" target="_blank" class="fab fa-linkedin-in"></a>
				</div>
			</div>
		</div>
	</div>
	<div><hr /></div>
	<div style="text-align: center; color: white; padding: 10px;">
		&copy; 2024 Alchemical Training. All Rights Reserved. Website created by <a
			href="https://www.hellpigeonstudios.com"
			target="_blank">Hellpigeon Studios</a
		>
		<div><hr /></div>
	</div>
</footer>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	a {
		text-decoration: none;
		color: rgb(94, 94, 94);
	}
	a:hover {
		color: #7b0293;
	}

	.footer-container {
		display: flex;
		justify-content: center;
		border-radius: 5px;
		padding: 10px;
		background-color: rgba(25, 25, 25, 0.7);
		color: white;
		max-width: 100%;
		margin: 20px auto 0 auto;
	}
	.footer-inner {
		display: flex;
		justify-content: space-around;
		width: 80%;
	}

	.col-fl-2 {
		flex: 2;
	}

	.col-fl-1 {
		flex: 1;
		color: rgb(94, 94, 94);
	}
	.footer-hr {
		width: 50%;
		border: 1px solid rgb(94, 94, 94);
		margin: 10px 0;
	}
	.social-icons a {
		color: rgb(94, 94, 94);
		margin: 0 10px;
		text-decoration: none;
		font-size: 24px;
	}
	.social-icons a:hover {
		color: #7b0293;
	}

	/* Media Queries for responsiveness */
	@media (max-width: 768px) {
		.footer-inner {
			flex-direction: column;
			align-items: center;
		}

		.col-fl-2,
		.col-fl-1 {
			flex: 100%;
			text-align: center;
		}

		.social-icons {
			text-align: center;
		}
	}

	@media (max-width: 480px) {
		.footer-container {
			padding: 5px;
		}

		.footer-inner {
			width: 100%;
		}

		.col-fl-2,
		.col-fl-1 {
			margin: 5px 0;
		}

		.social-icons a {
			margin: 0 5px;
			font-size: 20px;
		}
	}
</style>
