import demoViewTemplate from '../views/demo.html?raw';

export default (): HTMLDivElement => {
  const divElement = document.createElement('div');
  divElement.innerHTML = demoViewTemplate;
  return divElement;
};
