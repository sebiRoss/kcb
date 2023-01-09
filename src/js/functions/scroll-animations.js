//import * as basicScroll from "basicscroll";

export default function initScrollAnims() {
	const parallaxElem = document.querySelectorAll(".block-line");

	let observer = new IntersectionObserver(isElScrolledIntoView, {
		root: null,
		rootMargin: "0px 0px -15% 0px",
		threshold: 1,
	});

	if (parallaxElem) {
		/*
		parallaxElem.forEach((elem) => {
			const scroller = basicScroll
				.create({
					elem: elem,
					from: "top-bottom",
					to: "bottom-top",
					direct: true,
					props: {
						"--scaleX": {
							from: `0.1`,
							to: `1`,
						},
					},
				})
				.start();
		});*/
		parallaxElem.forEach((elem) => {
			observer.observe(elem);
		});
	}

	// create our "what to do with each observed element" function
	function isElScrolledIntoView(entries) {
		// again loop over all entries (element)
		entries.forEach((entry) => {
			// check if the entry is intersecting at our set threshold
			if (entry.isIntersecting) {
				// set a class to toggle animation
				let delay = entry.target.dataset.delay;

				setTimeout(() => {
					entry.target.classList.add("animate-in");
				}, delay);

				observer.unobserve(entry.target);
			}
		});
	}
}
