<footer class="py-16 pb-12 l-footer border-0 border-t-2 border-dashed border-[#949494] border-b-2">
    <div class="container grid grid-cols-1 gap-8 gird sm:grid-cols-2">
        <div>
            <?php
			if (is_active_sidebar('footer-1')) {
				dynamic_sidebar('footer-1');
			}
			?>
        </div>
        <div class="self-end">
            <?php
			if (is_active_sidebar('footer-2')) {
				dynamic_sidebar('footer-2');
			}
			?>
        </div>
    </div>
</footer>
<div class="c-contact-bar js-contact-bar">
    <a class="c-contact-bar__button js-contact-bar-toogle" href="#">Kontakt<span class="arrow"></span> </a>
    <a class="c-contact-bar__close js-contact-bar-toogle" href="#"></a>

    <div class="contact-bar__content">
        <?php
		if (is_active_sidebar('contact')) {
			dynamic_sidebar('contact');
		}
		?>
    </div>
</div>
<?php wp_footer(); ?>
</body>

</html>
