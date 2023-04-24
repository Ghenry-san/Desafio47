const title = document.querySelector('#aea');

title.addEventListener('mouseover', () => {
  title.style.color = 'red';
});

title.addEventListener('mouseout', () => {
  title.style.color = 'black';
});
