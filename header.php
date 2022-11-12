<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/_/img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="<?php echo get_stylesheet_directory_uri(); ?>/_/img/favicon.ico" type="image/x-icon">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <?php wp_body_open(); ?>

    <header class="l-header">
        <a class="o-home-link" href="<?php echo home_url() ?>">Antman</a>
        <?php
		wp_nav_menu(array(
			'theme_location' => 'main',
			'container' => '',
			'menu_class' => 'c-menu',
		));
		?>
        <button class="c-hamburger js-hamburger" type="button">
            <span class="c-hamburger-box">
                <span class="c-hamburger-inner"></span>
            </span>
        </button>
    </header>