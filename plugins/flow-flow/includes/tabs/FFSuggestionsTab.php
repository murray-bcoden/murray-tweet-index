<?php namespace flow\tabs;
if ( ! defined( 'WPINC' ) ) die;
/**
 * FlowFlow.
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>
 *
 * @link      http://looks-awesome.com
 * @copyright 2014-2015 Looks Awesome
 */

class FFSuggestionsTab implements LATab{
	public function __construct() {
	}

	public function id() {
		return "suggestions-tab";
	}

	public function flaticon() {
		return 'flaticon-like';
	}

	public function title() {
		return 'Feedback';
	}

	public function includeOnce( $context ) {
		\LAClassLoader::get()->includeOnceView('suggestions', $context);
	}
}