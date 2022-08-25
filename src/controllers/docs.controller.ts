import docsViewTemplate from '../views/docs.html?raw';

export default (): HTMLDivElement => {
  const divElement = document.createElement('div');
  divElement.innerHTML = docsViewTemplate;
  return divElement;
};
