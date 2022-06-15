const langArr = {
    "desk": {
        "ru": " – Одна из лучших программ для очистки и настройки системы.",
        "en": " – One of the best programs for cleaning and tweaking the system.",
    },
    "fwin": {
        "ru": "(Для Windows 11/10/8.1/7)",
        "en": "(For Windows 11/10/8.1/7)",
    },
    "dbtn": {
        "ru": "Скачать",
        "en": "Download",
    },
    "whyrl": {
        "ru": "Почему RedLine:",
        "en": "Why RedLine:",
    },
    "free": {
        "ru": "Бесплатность",
        "en": "It's free",
    },
    "dfree": {
        "ru": "RedLine полностью бесплатен, соответственно весь функционал доступен по умолчанию",
        "en": "RedLine is completely free, so all the functionality is available by default",
    },
    "clean": {
        "ru": "Лучшая очистка",
        "en": "Best cleaning",
    },
    "dclean": {
        "ru": "У RedLine одна из лучших очисток среди конкурентов, также он имеет “Умную очистку” - которая находит и удаляет мусор со всех дисков",
        "en": "RedLine has one of the best cleaner among competitors, it also has a “Smart cleaning” - which finds and removes garbage from all disks",
    },
    "tin": {
        "ru": "Лёгкость",
        "en": "Lightness",
    },
    "dtin": {
        "ru": "RedLine весит менее одного мб и не требует установки, соответственно не оставляет мусор в системе",
        "en": "RedLine weighs less than one MB and does not require installation, so it does not leave garbage in the system.",
    },
    "upd": {
        "ru": "Постоянное развитие",
        "en": "Continuous development",
    },
    "dupd": {
        "ru": "Мы постоянно улучшаем RedLine добавляя новые функции и улучшая старые",
        "en": "We are constantly improving RedLine by adding new features and improving old",
    },
}
const select = document.getElementById('lang-switcher');
var userLang = navigator.language || navigator.userLanguage;
function onStart(){
    if(userLang !== "ru" && userLang !== "be" && userLang !== "uk"){
        changeLanguage()
    }
}
onStart();
select.addEventListener('click', changeLanguage);
function changeLanguage() {
    for (let key in langArr) {
        let elem = document.querySelector('.l-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][select.textContent.toLowerCase()];
        }
    }
    select.textContent = select.textContent === "RU" ? "EN" : "RU";
}