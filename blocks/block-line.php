<?php

$id = 'content-block-' . $block['id'];
if (!empty($block['anchor'])) {
	$id = $block['anchor'];
}

$className = 'content-block block-line';
if (!empty($block['className'])) {
	$className .= ' ' . $block['className'];
}

if (!empty($block['align'])) {
	$className .= ' align' . $block['align'];
}

if (!empty($block['backgroundColor'])) {
	$bgColor .= ' has-background';
	$bgColor .= ' has-' . $block['backgroundColor'] . '-background-color';
}


$isWhite = get_field('is_white');
$bgClass .= ($isWhite) ? 'has-white-background-color' : '';

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" data-delay="<?php the_field('delay') ?>">
    <span class="line <?php echo $bgClass ?>"></span>
</div>
