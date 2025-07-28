<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Talep Gönderildi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1 data-tr="Çiftlik Sitesi" data-en="Farm Website" data-ar="موقع المزرعة">Çiftlik Sitesi</h1>
    <nav>
      <a href="index.html" data-tr="Anasayfa" data-en="Home" data-ar="الصفحة الرئيسية">Anasayfa</a>
      <a href="about.html" data-tr="Hakkımızda" data-en="About Us" data-ar="من نحن">Hakkımızda</a>
      <a href="contact.html" data-tr="İletişim" data-en="Contact" data-ar="اتصل بنا">İletişim</a>
    </nav>
    <div class="language-switch">
      <button onclick="setLanguage('tr')">TR</button>
      <button onclick="setLanguage('en')">EN</button>
      <button onclick="setLanguage('ar')">AR</button>
    </div>
  </header>

  <main>
    <h2 data-tr="Talep Durumu" data-en="Request Status" data-ar="حالة الطلب">Talep Durumu</h2>

    <div class="form-sonuc">
      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $isim = htmlspecialchars($_POST['isim']);
        $email = htmlspecialchars($_POST['email']);
        $telefon = htmlspecialchars($_POST['telefon']);
        $talep = htmlspecialchars($_POST['talep']);

        echo "<p><strong>İsim:</strong> $isim</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Telefon:</strong> $telefon</p>";
        echo "<p><strong>Talep:</strong> $talep</p>";
      }
    </div>

    <a href="index.html" class="back-button">Geri Dön</a>
  </main>

  <footer>
    <p>&copy; 2025 Tüm hakları saklıdır.</p>
  </footer>

  <script>
    function setLanguage(lang) {
      localStorage.setItem("lang", lang);
      translatePage(lang);
    }

    function translatePage(lang) {
      const elements = document.querySelectorAll("[data-" + lang + "]");
      elements.forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      const savedLang = localStorage.getItem("lang") || "tr";
      translatePage(savedLang);
    });
  </script>
</body>
</html>