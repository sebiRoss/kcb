<?php

//add_action('acf/init', 'dar_acf_init');
function dar_acf_init() {

	// check function exists
	if( function_exists('acf_register_block') ) {

		acf_register_block(array(
			'name'				=> 'dummy',
			'title'				=> 'Dummy',
			'description'		=> 'Dummy Block',
			'render_callback'	=> 'dar_acf_block_render_callback',
			'category'			=> 'antman-blocks',
			'icon'				=> 'format-image',
			'keywords'			=> array( 'accordion', 'anne' ),
			'supports' => array(
				'anchor' => true,
				'align'	=> false,
			),
		));

	}
}

function dar_acf_block_render_callback( $block ) {

	// remove acf from Slug
	$slug = str_replace('acf/', '', $block['name']);

	if( file_exists(STYLESHEETPATH . "/blocks/block-{$slug}.php") ) {
		include( STYLESHEETPATH . "/blocks/block-{$slug}.php" );
	}
}


function dar_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'antman-blocks',
				'title' => 'Antman',
			),
		)
	);
}
add_filter( 'block_categories_all', 'dar_block_category', 10, 2);
