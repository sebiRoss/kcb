wp.domReady(function () {
	wp.blocks.unregisterBlockStyle("core/quote", "default");
	wp.blocks.unregisterBlockStyle("core/quote", "large");

	wp.blocks.unregisterBlockStyle("core/button", "default");
	wp.blocks.unregisterBlockStyle("core/button", "squared");

	wp.blocks.registerBlockStyle("core/button", {
		name: "large-button",
		label: "Large Button",
	});
});
