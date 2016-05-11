var navigation = document.getElementById('nav-container');
var noBackground = false;

window.onscroll = function() {
  var vscroll = document.body.scrollTop;

  if(vscroll < 1) {
    navigation.classList.remove("navigation-container--no-bg");
    noBackground = false;
  }
  else if(!noBackground) {
    navigation.classList.add('navigation-container--no-bg');
    noBackground = true;
  }
}