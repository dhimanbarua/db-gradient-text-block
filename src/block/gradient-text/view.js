// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';

function initMaskedTextAnimation() {
	const nodes = document.querySelectorAll(
		'.gtb-gradient-text-wrraper[data-text-mask="1"] .gtb-gradient-text'
	);

	nodes.forEach((el) => {
		// Avoid double-initializing if this runs more than once.
		if (el.__gtbMaskTl) return;

		const tl = gsap.timeline({ repeat: -1 });
		tl.to(el, {
			duration: 30,
			backgroundPosition: '-960px 0px',
			ease: 'none',
		});

		el.__gtbMaskTl = tl;
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initMaskedTextAnimation);
} else {
	initMaskedTextAnimation();
}

