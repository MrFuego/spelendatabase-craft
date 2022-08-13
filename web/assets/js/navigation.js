//script to change header if scrolled
const headerClass="main-header-scrolled"
const header = document.getElementById("main-header");

function add_class_on_scroll() {
    header.classList.remove(headerClass);
}

function remove_class_on_scroll() {
    header.classList.add(headerClass);
}

window.addEventListener('scroll', function(){ 

    let scrollpos = window.scrollY;

    if(scrollpos < 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    //console.log(scrollpos);
});


//script to change active class on single page part
const sections = document.querySelectorAll("div.container");
const navItem = document.querySelectorAll(".left-nav a");
const activeClass = "main-navigation-item--active";

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id"); 
    }
  });

  navItem.forEach((a) => {
    a.classList.remove(activeClass);
    if (a.classList.contains("nav-"+current)) {
      a.classList.add(activeClass);
    }
  });
};

const menuButton = document.getElementById("mobile-nav-button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(header.classList.contains('visible')){
    header.classList.remove('visible');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  } else{
    header.classList.add('visible');
    menuButton.innerHTML = '<i class="fas fa-times"></i>';
  }
}