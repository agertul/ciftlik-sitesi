function setLanguage(lang) {
  document.querySelectorAll('[data-tr]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

setLanguage('tr');
