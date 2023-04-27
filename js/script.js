const form = document.getElementById('contactform');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (confirm('Thank You For Submitting')) {
    location.reload();
  }
});
