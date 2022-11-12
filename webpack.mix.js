const mix = require("laravel-mix");
require("mix-tailwindcss");

mix
	.options({ processCssUrls: false })
	.setPublicPath("_")
	.js("src/js/functions.js", "./js")
	.js(["src/js/editor-functions.js"], "./_/js/editor-functions.js")
	.sass("src/scss/style.scss", "./css")
	.sass("src/scss/editor-style.scss", "./css")
	.tailwind()
	.copyDirectory("src/img/", "./_/img")
	.copyDirectory("src/fonts/", "./_/fonts")
	.disableSuccessNotifications();
