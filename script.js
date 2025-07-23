
function setLanguage(lang) {
  document.querySelectorAll('[data-tr]').forEach(el => {
    el.innerText = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-tr');
  });
}
window.onload = () => setLanguage('tr');
