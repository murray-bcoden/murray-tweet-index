			<footer class="footer" role="contentinfo" id="footer">

				<div class="footer-wrapper">

					<div class="methodology">

						<h2 class="footer-title">Methodology</h2>

						<!-- <div class="methodology-content"> -->

							<!-- <div class="method-intro"> -->
								<p>The study was based on the analysis of the Twitter handles of over 700 journalists carried out in November and December 2016. Using the analysis tool Twitonomy, we gathered the following data for each of the journalists:</p>
							<!-- </div> -->
							
							<ol class="method-list">
								<li>Total Number of Followers: <span>30%</span></li>
								<li>Total Number of Retweets: <span>25%</span></li>
								<li>% Retweeted: <span>15%</span></li>
								<li>Total Number of Favourites: <span>15%</span></li>
								<li>% of Favourited: <span>5%</span></li>
								<li>Tweets per Day: <span>10%</span></li>
							</ol>

							<p>The data was based on the previous 3,200 tweets that the user had made (or if the user had yet to make 3,200 tweets then all their tweets to date). To calculate the overall rankings we attached a weighting to the users’ ranking in each of the individual parameters. The percentages shown above indicate the weighting each parameter was given in the overall score. The factors that influence the overall ranking are:</p>

							<ul>
								<li>A person’s absolute popularity on Twitter (as measured by number of followers).</li>
								<li>The quality of engagement the user has with followers (as measured by the absolute number of  retweets and favourites, and the percentage of these in the tweets analysed).</li>
								<li>The level of activity on Twitter (as measured by Tweets per day).</li>
							</ul>

							<p>Journalists were restricted to being considered in only one specialist category even if they might have been ranked in more than one. For example George Hook could have been considered in the sports category, but was restricted to what we viewed as his primary role as broadcast presenter.</p>
						<!-- </div> -->

					</div>

					<div class="deets">
						
						<div class="contact">
							<h2 class="footer-title">Contact</h2>
							<p>For comments or suggestions on the #murraytweetindex, or to suggest a name that was not included and should have been, please email us at: <a href="mailto:<?php echo antispambot( 'tweetindex@murraygroup.ie' ); ?>"><?php echo antispambot( 'tweetindex@murraygroup.ie' ); ?></a></p>
							<p>Website: <a href="http://www.murrayconsult.ie" target="_blank">murrayconsult.ie</a></p>
						</div>

						<div class="twitter-follow">
							<h2 class="footer-title">Social</h2>
							<a href="#" id="twitter-follow">Follow @MurrayIRL on Twitter</a>
						</div>

						<div class="press-release">
							<h2 class="footer-title">Press Release</h2>
							<a href="<?php echo get_template_directory_uri(); ?>/assets/downloads/MurrayTweetIndexPressRelease.pdf" target="_blank" class="btn btn-download">Download the PDF</a>
						</div>

						<div class="credit">Designed by <a href="http://www.murraycreative.ie" target="_blank" class="mc-logo-link"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/murray-creative-logo.svg" alt="Murray Creative Logo"></a></div>
						
						<p class="copyright">&copy; <?php echo date('Y'); ?> Copyright Murray. All rights reserved. <a href="#disclaimer">Disclaimer</a></p>	

					</div>

				</div>

			</footer>

		</main>
			<a href="https://twitter.com/intent/tweet/?text=Check%20out%20the%20Murray%20Tweet%20Index%202015:&amp;url=http://murraytweetindex.ie&amp;hashtags=murraytweetindex&amp;via=MurrayIRL&amp;" class="mti-twitter-share"><span>Share</span></a>
	<!-- /wrapper -->

		<!-- ============= OUTDATED BROWSER ============= -->
        <div id="outdated"></div>

		<?php wp_footer(); ?>

		<!-- Google Analytics: change UA-72968559-1 to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-72968559-1','auto');ga('send','pageview');
        </script>
    </body>
</html>
