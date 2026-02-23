async function loadTranslations() {
  const response = await fetch('translations.json');
  return await response.json();
}

async function switchLanguage(lang) {
  const translations = await loadTranslations();
  const elements = document.querySelectorAll('[data-key]');

  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
}

function switchToEnglish() {
  switchLanguage('en');
}

function switchToRussian() {
  switchLanguage('ru');
}

// Установить русский язык при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  switchToRussian();
});
