function setLanguage(lang) {
  document.querySelectorAll('[data-tr]').forEach(el => {
    if (lang === 'en') {
      el.innerText = el.getAttribute('data-en');
    } else if (lang === 'ar') {
      el.innerText = el.getAttribute('data-ar');
    } else {
      el.innerText = el.getAttribute('data-tr');
    }
  });

  // Sayfa yönünü Arapça için sağdan sola yapalım
  if (lang === 'ar') {
    document.body.dir = 'rtl';
  } else {
    document.body.dir = 'ltr';
  }

  // HTML lang değiştir
  document.documentElement.lang = lang;
}

// Varsayılan dil Türkçe
window.onload = () => setLanguage('tr');