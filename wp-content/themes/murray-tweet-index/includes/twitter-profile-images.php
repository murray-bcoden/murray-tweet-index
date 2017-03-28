<?php
	// Include and instantiate the TwitterOAuth library
	require 'vendor/autoload.php';
	use Abraham\TwitterOAuth\TwitterOAuth;

	function get_profile_images() {

		// Get the Twitter handles from AJAX
		$twitter_handles = $_POST['twitterHandles'];
		$twitter_handles_string = implode(',', $twitter_handles);
		
		// Set up the output array
		$twitter_images = array();
		$ajax_response = array();

		// Define the Twitter OAuth keys
		define('CONSUMER_KEY', 'oGoYwHdIcxBwEfyIFNk8GeMs3');
		define('CONSUMER_SECRET', 'YqXosB6mD8rWWVE9l7aWx9gS1dBzeGrEfXH73PJ55RPynhHv9R');
		define('ACCESS_TOKEN', '18799085-fLvboIYwl9FMfalRLlm21PuMrw2zw3y9bVbiepBX5');
		define('ACCESS_TOKEN_SECRET', '0Nbl5VibxRUfiWdCSAgXTceyPGazQCQwO5X5klWfQKzW9');

		// Make a connection
		try {
			$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
		} catch (TwitterOAuthException $e) {
			echo json_encode( array( 'error' => array( 'result' => 'Could not connect to the Twitter API.' ) ) );
		}

		// Get a bunch of users
		try {
			$contents = $connection->get('users/lookup', ['screen_name' => $twitter_handles_string]);
		} catch (TwitterOAuthException $e) {
			echo json_encode( array( 'error' => array( 'result' => 'Could not get user profiles.' ) ) );
		}

		$response_code = $connection->getLastHttpCode();
		
		if ($response_code == 200) {
			// Loop through the response and display the images
			foreach ($contents as $content) {
				$profile_image = str_replace('_normal', '_400x400', $content->profile_image_url);
				array_push($twitter_images, array('handle' => $content->screen_name, 'profile_image' => $profile_image));
			}
			$ajax_response = $twitter_images;
		} else {
			http_response_code($response_code);
			array_push($ajax_response, array( 'error' => array( 'result' => 'Could not get profile images', 'error_code' => $response_code ) ) );
		}

		// Get one user
		// $content = $connection->get('users/show', ['screen_name' => 'cooper_m']);
		// Push the user response to the array
		// array_push($twitter_images, array('handle' => $content->screen_name, 'profile_image' => $content->profile_image_url));

		echo json_encode($ajax_response);

		die();

	} // End of get_menu_details function

add_action( 'wp_ajax_nopriv_load_profile_images', 'get_profile_images' );
add_action( 'wp_ajax_load_profile_images', 'get_profile_images' );
?>