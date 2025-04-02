import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyright from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import { changeLanguage,detectLanguage } from '../lang/lenguaje.js';



parallax();

activeMenu();

resetToHome();

updateCopyright();

sendEmail();

detectLanguage();

document.getElementById("btn-es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));



