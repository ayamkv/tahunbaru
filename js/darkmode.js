// dark mode
let DarkOptions = {
    saveInCookies: true, // default: true,
    autoMatchOsTheme: true, // default: true
    label: '🌗',
};
function addDarkmodeWidget() {
    new Darkmode(DarkOptions).showWidget();
};
window.addEventListener('load', addDarkmodeWidget);
console.log('Darkmode is loaded')
