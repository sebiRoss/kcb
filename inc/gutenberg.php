<?php

add_action('acf/init', 'dar_acf_init');
function dar_acf_init() {

	// check function exists
	if (function_exists('acf_register_block')) {

		acf_register_block(array(
			'name'				=> 'line',
			'title'				=> 'Animierte Linie',
			'description'		=> 'Animierte Linie Block',
			'render_callback'	=> 'dar_acf_block_render_callback',
			'category'			=> 'kcb-blocks',
			'icon'				=> 'format-image',
			'keywords'			=> array('line', 'linie', 'animiert', 'kcb'),
			'align'           => '',
			'supports' => array(
				'anchor' => false,
				'align'	=> ['wide'],
				'color'           => [
					'background' => true,
					'gradients'  => false,
					'text'       => false,
				],
			),
		));
	}
}

function dar_acf_block_render_callback($block) {

	// remove acf from Slug
	$slug = str_replace('acf/', '', $block['name']);

	if (file_exists(STYLESHEETPATH . "/blocks/block-{$slug}.php")) {
		include(STYLESHEETPATH . "/blocks/block-{$slug}.php");
	}
}


function dar_block_category($categories, $post) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'kcb-blocks',
				'title' => 'kcb',
			),
		)
	);
}
add_filter('block_categories_all', 'dar_block_category', 10, 2);