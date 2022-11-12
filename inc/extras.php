<?php
// Remove Meta Tags
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);

// Disable Emojis
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// Remove Duotone SVGs
remove_action('wp_body_open', 'wp_global_styles_render_svg_filters', 10, 0);
remove_action('in_admin_header', 'wp_global_styles_render_svg_filters', 10, 0);

// Add Support for SVG Upload
function dar_svgs_upload_mimes($mimes = array()) {
	$mimes['svg'] = 'image/svg+xml';
	$mimes['svgz'] = 'image/svg+xml';

	return $mimes;
}
add_filter('upload_mimes', 'dar_svgs_upload_mimes');