<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$policy_page_id = (int) get_option( 'wp_page_for_privacy_policy' );
if( $policy_page_id && is_post_publicly_viewable( $policy_page_id ) ) {
	$link_title  = empty( $attributes['linkTitle'] ) ? get_the_title($policy_page_id) : $attributes['linkTitle'];
	$privacy_policy_url = get_privacy_policy_url();
	$link = sprintf(
		'<a class="privacy-policy-link" href="%s" rel="privacy-policy">%s</a>',
		esc_url( $privacy_policy_url ),
		esc_html( $link_title )
	);

	$block_content = '<div ' . get_block_wrapper_attributes() . '>' . $link . '</div>';

	echo wp_kses_post( $block_content );
}
