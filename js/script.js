const header = document.querySelector("header");

const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');
//Cambia al formulario de registro
registerLink.onclick = () => {
	wrapper.classList.add('active');
}
//Cambia al formulario de inicio de sesión
loginLink.onclick = () => {
	wrapper.classList.remove('active');
}
//Muestra el formulario de sesión
btnPopup.onclick = () => {
	wrapper.classList.add('active-popup');
}
//Cierra el formulario
iconClose.onclick = () => {
	wrapper.classList.remove('active-popup');
	wrapper.classList.remove('active');
}

window.addEventListener("scroll", function() {
	header.classList.toggle("down", window.scrollY > 0);
})