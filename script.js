function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("mySidebar").style.opacity = "1";
    document.getElementById("mySidebar").tagName("a").style = "visible";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("mySidebar").style.opacity = "0";
    document.getElementById("mySidebar").tagName("a").style = "invisible";
  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("title-bar").style.top = "0";
  } else {
    document.getElementById("title-bar").style.top = "-50px";
  }
}