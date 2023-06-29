const menu = document.querySelector('#menu');
const navItems = document.querySelector('.nav-items');
const links = document.querySelectorAll('.nav-link');

menu.addEventListener('click', () => {
	navItems.classList.toggle('showNav');
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		links.forEach((link) => {
			link.classList.remove('active');
		});

		link.classList.add('active');
	});
});
