<?php
/**
 * Plugin Name:       Privacy Policy Block
 * Description:       Displays a privacy policy link if the privacy policy page is set.
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Media Proper
 * Author URI:        https://www.mediaproper.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       privacy-policy-block
 *
 * @package           privacy-policy-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function mediaproper_privacy_policy_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'mediaproper_privacy_policy_block_init' );
