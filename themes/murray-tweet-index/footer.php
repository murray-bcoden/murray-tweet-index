			<footer class="footer" role="contentinfo" id="footer">

				<div class="footer-wrapper">

					<div class="methodology">

						<h2 class="footer-title">Methodology</h2>

						<div class="methodology-content">

							<div class="method-intro">
								<p>The study was based on the analysis of the Twitter handles of over 300 journalists carried out in September and October 2015. Using the analysis tool Twitonomy, we gathered the following data for each of the journalists:</p>
							</div>
							
							<ol class="method-list">
								<li>Total Number of Followers: <span>30%</span></li>
								<li>Total Number of Retweets: <span>25%</span></li>
								<li>% Retweeted: <span>15%</span></li>
								<li>Total Number of Favourites: <span>15%</span></li>
								<li>% of Favourited: <span>5%</span></li>
								<li>Tweets per Day: <span>10%</span></li>
							</ol>

						</div>

					</div>

					<div class="contact">
						<h2 class="footer-title">Contact</h2>
						<p>For comments or suggestions on the #murraytweetindex, or to suggest a name that was not included and should have been, please email us at: <a href="mailto:<?php echo antispambot( 'tweetindex@murraygroup.ie' ); ?>"><?php echo antispambot( 'tweetindex@murraygroup.ie' ); ?></a></p>
					</div>

					<div class="footnote">

						<div class="credit">Designed by <a href="http://www.murraycreative.ie" target="_blank" class="mc-logo-link"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/murray-creative-logo.svg" alt="Murray Creative Logo"></a></div>
						
						<p class="copyright">&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?> <a href="#">Disclaimer</a></p>	

					</div>
				
				</div>

			</footer>

		</main>
		<!-- /wrapper -->

		<!-- ============= OUTDATED BROWSER ============= -->
        <div id="outdated"></div>

		<?php wp_footer(); ?>

		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
