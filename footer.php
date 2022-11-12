<footer class="l-footer">

    <div class="container l-footer__widget-wrap">
        <?php
		if (is_active_sidebar('footer-1')) {
			dynamic_sidebar('footer-1');
		}
		?>
    </div>
    <div class="container l-footer__impressum">
        <?php
		wp_nav_menu(array(
			'theme_location' => 'impressum',
			'container' => '',
			'menu_class' => 'impressum-menu',
		));
		?>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>
