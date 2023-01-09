export default function contactToggle() {
	const contactBarBtns = document.querySelectorAll(".js-contact-bar-toogle");
	const contactBar = document.querySelector(".js-contact-bar");
	const contactBarBtnLarge = document.querySelector(".c-contact-bar__button");

	if (contactBar != null) {
		let contactHeight = contactBar.offsetHeight;

		contactBarBtnLarge.style.setProperty("--btn-width", contactHeight + "px");

		contactBarBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.preventDefault();
				contactBar.classList.toggle("is-open");
			});
		});
	}
}
