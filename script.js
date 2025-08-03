function setLanguage(lang) {
  document.querySelectorAll('[data-tr], [data-en], [data-ar]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) el.textContent = text;
  });

  // Sayfa yönü
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Marquee güncelle
  updateMarquee(lang);

  // Seçilen dili localStorage'a kaydet
  localStorage.setItem('selectedLang', lang);
}

function updateMarquee(lang) {
  const marqueeBox = document.getElementById("marquee-box");
  const marqueeText = document.querySelector(".marquee-text");
  if (!marqueeBox || !marqueeText) return;

  const message = marqueeText.getAttribute("data-" + lang);
  if (!message) return;

  marqueeText.innerHTML = `<span>${message}</span><span>${message}</span>`;

  marqueeText.classList.remove("marquee-ltr");
  if (lang === 'ar') {
    marqueeText.classList.add("marquee-ltr");
  }
}

window.onload = () => {
  const savedLang = localStorage.getItem("selectedLang") || 'tr';
  setLanguage(savedLang);
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("products.html")) {
    const lang = localStorage.getItem("selectedLang") || 'tr';
    updateMarquee(lang);
  }
});
