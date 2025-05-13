const menu = document.querySelector('.navbar-menu');
document.querySelector('.menu').onclick = () =>{
  menu.classList.toggle('active');
}
const hamburger = document.querySelector('.menu');
document.addEventListener('click', function (e) {
  if(!menu.contains(e.target) && !hamburger.contains(e.target)){
    menu.classList.remove('active');
  }
});