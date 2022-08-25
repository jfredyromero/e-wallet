import footerViewTemplate from './footer.component.html?raw';

export default (): void => {
  const headerElement = document.getElementById('footer');
  headerElement!.innerHTML = footerViewTemplate;
};
