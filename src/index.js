import './style.css';

const content = document.getElementById('content');

const templatePage = document.createElement('div');
templatePage.id = 'template-page';

const templateText = document.createElement('div');
templateText.id = 'template-text';
templateText.textContent = 'TEMPLATE';

templatePage.appendChild(templateText);
content.appendChild(templatePage);

console.log('hey earth');
