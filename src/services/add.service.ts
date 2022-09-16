export default (): void => {
	const radioButtons: NodeListOf<HTMLInputElement> =
		document.querySelectorAll('input[name=payment]');
	radioButtons.forEach(button => {
		button.addEventListener('change', () => {
			document.querySelectorAll('.option-hidden').forEach(option => {
				option.classList.remove('show');
			});
			button.parentElement?.nextElementSibling?.classList.toggle('show');
		});
	});
};
