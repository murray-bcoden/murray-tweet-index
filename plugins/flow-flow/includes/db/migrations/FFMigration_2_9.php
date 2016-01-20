<?php namespace flow\db\migrations;
use flow\db\FFDBMigration;

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
class FFMigration_2_9 implements FFDBMigration {

	public function version() {
		return '2.9';
	}

	public function execute($manager) {
		$options = $manager->getOption('options', true);
		if ($options === false) $options = array();
		if (!isset($options['soundcloud_api_key'])) $options['soundcloud_api_key'] = '';
		$manager->setOption('options', $options, true);
	}
}