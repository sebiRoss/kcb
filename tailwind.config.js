module.exports = {
	mode: "jit",
	content: require("fast-glob").sync([
		"./**/*.php",
		"./src/js/**/*.js",
		"./theme.json",
	]),
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [],
};
