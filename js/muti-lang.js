var craftwar_lang;
window.addEventListener('load', initLanguage);
// navigator.languages is supported by firefox/chrome
function initLang() {
    for (const lang of navigator.languages) {
        if (lang.startsWith("zh")) {
            craftwar_lang = "zh";
            break;
        } else if (lang.startsWith("en")) {
            craftwar_lang = "en";
            break;
        }
    }
    if (!craftwar_lagn)
        craftwar_lang = "en";
    showContent();
}
function showContent() {
    for (let e of document.querySelectorAll(".lang"))
        e.style = "display: none";
    if (craftwar_lang == "zh")
        document.querySelector(".lang.zh").style = "";
    else
        document.querySelector(".lang.en").style = "";
}
function toggleLanguage() {
    if (craftwar_lang == "en")
        craftwar_lang = "zh";
    else
        craftwar_lang = "en";
    showContent();
}
