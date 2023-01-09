<?php

function dar_setup() {

	//Make theme available for translation.
	//load_theme_textdomain( 'kcb', get_template_directory() . '/languages' );

	// Let WordPress manage the document title.
	add_theme_support('title-tag');

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(array(
		'main' =>  'Hauptmenü',
		'impressum' =>  'Impressum',
	));

	// Switch default core markup for search form, comment form, and comments to output valid HTML5.
	add_theme_support('html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));


	// Add support for responsive embedded content.
	add_theme_support('responsive-embeds');


	// Disable Core Block Patterns
	remove_theme_support('core-block-patterns');

	// Editor Styles
	add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'dar_setup');


// Add backend styles for Gutenberg.
function dar_gutenberg_assets() {

	wp_enqueue_style('kcb-editor-style', get_template_directory_uri() . '/_/css/editor-style.css', array(), filemtime(get_template_directory() . '/_/css/editor-style.css'));
	wp_enqueue_script('kcb-editor-functions', get_template_directory_uri() . '/_/js/editor-functions.js', array('wp-blocks', 'wp-dom-ready', 'wp-edit-post'), filemtime(get_template_directory() . '/_/js/editor-functions.js'));
}
add_action('enqueue_block_editor_assets', 'dar_gutenberg_assets');


// Register widget area.
function dar_widgets_init() {
	register_sidebar(array(
		'name'          => 'Footer 1',
		'id'            => 'footer-1',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="c-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<div class="c-widget__title">',
		'after_title'   => '</div>',
	));

	register_sidebar(array(
		'name'          => 'Footer 2',
		'id'            => 'footer-2',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="c-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<div class="c-widget__title">',
		'after_title'   => '</div>',
	));

	register_sidebar(array(
		'name'          => 'Kontakt',
		'id'            => 'contact',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h5 class="widget-title">',
		'after_title'   => '</h5>',
	));
}
add_action('widgets_init', 'dar_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function dar_scripts() {

	wp_enqueue_style('kcb-style', get_template_directory_uri() . '/_/css/style.css', array(), filemtime(get_template_directory() . '/_/css/style.css'));
	wp_enqueue_script('kcb-functions', get_template_directory_uri() . '/_/js/functions.js', array(), filemtime(get_template_directory() . '/_/js/functions.js'), true);
}

add_action('wp_enqueue_scripts', 'dar_scripts');


// Custom functions that act independently of the theme templates.
require get_template_directory() . '/inc/extras.php';

// Custom Theme functions
require get_template_directory() . '/inc/theme.php';

//  Disable everything Comment related
require get_template_directory() . '/inc/comments.php';

// Add Custom Shortcodes
require get_template_directory() . '/inc/shortcodes.php';

// Custom Post Types
require get_template_directory() . '/inc/cpt.php';

// Gutenberg
require get_template_directory() . '/inc/gutenberg.php';