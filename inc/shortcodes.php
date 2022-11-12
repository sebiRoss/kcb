<?php
// Add Button Shortcode
//add_shortcode( 'button', 'button_shortcode' );
function button_shortcode( $atts  ) {

	// Attributes
	extract( shortcode_atts(
		array(
			'link' => '/',
			'text' => '',
			'target' => '_self',
			'class'  => '',
		), $atts )
	);


	$output = '<a target="' . $target . '" class="o-button ' . $class . '" href="' . esc_url($link) . '">' . esc_html($text) . '</a>';

	return $output;

}