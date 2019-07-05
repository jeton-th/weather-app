import location from './location';
import render from './render';

new Promise((resolve) => {
  resolve(location());
}).then((result) => {
  const content = document.querySelector('#content');
  content.innerHTML = `${result.coords.longitude} - ${result.coords.longitude}`;
});


render();
