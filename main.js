var typed = new Typed(".text", {
    strings: ["Web Developer", "Software Engineer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbylfxmKgiI5RIvbHJ_25RJWkRcwbGnKjMJW7BYSE8CHzTO9QT89a1r5zpI0_RzOl7yK/exec';
const form = document.forms['contact-form'];



form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.fname.value;
  const lang = 'en';
  const musicOption = 'true';

  // Start submit, don't wait for result
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .catch(error => console.error('Error!', error.message));

  // Redirect right away
  window.location.href = `thankyou.html?name=${encodeURIComponent(name)}&lang=${lang}&musicOption=${musicOption}`;
});



