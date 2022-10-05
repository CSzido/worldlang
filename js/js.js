
(function () {
    "use strict";
    const typed = document.getElementsByClassName("typed");
    if (typed) {
      let typed_strings = ["The world's first multilingual programming language 🌎"];
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

})()
window.onscroll = function() {
  if (window.pageYOffset > window.innerHeight) {
    document.getElementById("nav").classList = "nav-active";
    document.getElementById("up").classList = "up";
  }else{
    document.getElementById("nav").classList = "";
    document.getElementById("up").classList = "";
  }
};

function _search() {
  document.getElementById("search").style = " height: calc(100vh - 140px);padding: 70px;";
}
function __search() {
  document.getElementById("search").style = "";
}
