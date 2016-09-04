document.addEventListener("DOMContentLoaded", ready);

function ready () {
    var a = chrome.extension.getURL("css/style.css");
  $('<link rel="stylesheet" type="text/css" href="' + a + '" >').appendTo("head");
}

(function(){
  var prevScrollPos = 0;
  var hideHEaderClass = 'hide-vk-header';
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  setTimeout(function(val) {
    prevScrollPos = val;
  }.bind(null, scrolled));

  if (scrolled > prevScrollPos) {
      addClassForHeader();
  } else if (scrolled < prevScrollPos) {
    removeClassForHeader();
  }

  function addClassForHeader() {
    var d = document.getElementById("page_header_cont");
    if (d.className.indexOf(hideHEaderClass) === -1) {
      d.className += " " + hideHEaderClass;
    }
  }

  function removeClassForHeader() {
    var d = document.getElementById("page_header_cont");
    var index = d.className.indexOf(hideHEaderClass);
    if (index > -1) {
      d.className = d.className.slice(0, index);
    }
  }
}
}());
