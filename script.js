const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

document.querySelectorAll('[data-required-form]').forEach(form => {
  const submitButton = form.querySelector('.submit-btn');
  const requiredFields = Array.from(form.querySelectorAll('[required]'));

  const updateSubmitState = () => {
    const isComplete = requiredFields.every(field => field.checkValidity());
    submitButton.disabled = !isComplete;
  };

  form.addEventListener('input', updateSubmitState);
  form.addEventListener('change', updateSubmitState);
  updateSubmitState();
});
