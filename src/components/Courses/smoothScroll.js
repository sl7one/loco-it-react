const link = document.querySelector('[href="#corsestitle"]');
link.addEventListener('click', event => {
  event.preventDefault();

  const title = document.querySelector('#corsestitle');
  title.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
