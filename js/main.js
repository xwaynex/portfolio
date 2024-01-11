/**SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

/**MENU SHOW */
/**Validate if const exist */
if (navToggle) {
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}

/**MENU HIDDEN */
/**validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/**REMOVE MENU MOBILE */

const navLink = document.querySelectorAll("nav_link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click, linkAction"))

/**CHANGE BACKGROUND HEADER */

function scrollHeader() {
    const header = document.getElementById("header")
    //when the scroll is greater is greater than 50 viewport height, add the scroll-header class to the tag
    if(this.scrollY >= 40) header.classList.add("scroll_header"); else header.classList.remove("scroll_header")
}
window.addEventListener("scroll", scrollHeader)

/**SHOW SCROLL UP */
function scrollUp () {
    const scrollUp = document.getElementById("scroll-up");
    //when you scroll is higher than 200 viewpoints height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add("show_scroll"); else scrollUp.classList.remove("show_scroll")
}
window.addEventListener("scroll", scrollUp)

/**SCROLL SECTION ACTIVE LINK */

const scrollActive = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav_menu a[href*=${sectionId}]`)
          .classList.add("active_link");
      } else {
        document
          .querySelector(`.nav_menu a[href*=${sectionId}]`)
          .classList.remove("active_link");
      }
    });
  };
  
  window.addEventListener("scroll", scrollActive);
/* const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.add("active_link")
        } else {
            document.querySelector(`.nav_menu a[href*=${sectionId}]`).classList.remove("active_link")
        }
    })
}
window.addEventListener("scroll", scrollActive) */

/**SCROLL REVEAL ANIMATION */
const sr = ScrollReveal ({
    distance: "60px",
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home_header, .section_title`, {delay: 600})
sr.reveal(`.home_footer`, {delay: 700})
sr.reveal(`.home_img`, {delay: 900, origin: "top"})

sr.reveal(`.sponsor_img, .projects_card, .footer_logo, .footer_content, .footer_copy`, {origin: "top", interval: 500})
sr.reveal(`.ai_img, .about_animate`, {origin: "left", interval: 500})
sr.reveal(`.ai_data, .about_img`, {origin: "right", delay: 500})
sr.reveal(`.services_data`, {origin:"top", delay:500})

sr.reveal(`.contact_button-container`, {origin: "bottom", delay: 1000})
sr.reveal(`.contact_icon_button`, {origin: "bottom", delay: 2500})
sr.reveal(`.contact_container`, {origin: "right", delay: 100})
sr.reveal(`.contact_form`, {origin: "left", delay: 500})
