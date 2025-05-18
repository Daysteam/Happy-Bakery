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
const search = document.querySelector('#searchs');
const x = document.querySelector('.x');
document.querySelector('.search').onclick = () => {
  search.classList.toggle('aktif');
  x.classList.toggle('aktif');
}
x.onclick = () => {
  x.classList.remove('aktif');
  search.classList.remove('aktif');
}